use anyhow::{Context, Result};
use std::env;
use std::ffi::OsString;
use std::path::{Path, PathBuf};

pub const STORAGE_ENV_VAR: &str = "CATCAT_STORAGE_DIR";

#[derive(Clone, Debug, Eq, PartialEq)]
pub struct StoragePaths {
    pub root: PathBuf,
    pub db_dir: PathBuf,
    pub config_dir: PathBuf,
    pub files_dir: PathBuf,
    pub logs_dir: PathBuf,
}

impl StoragePaths {
    fn new(root: PathBuf) -> Self {
        Self {
            db_dir: root.join("db"),
            config_dir: root.join("config"),
            files_dir: root.join("files"),
            logs_dir: root.join("logs"),
            root,
        }
    }
}

pub fn storage_paths() -> Result<StoragePaths> {
    Ok(StoragePaths::new(storage_root()?))
}

pub fn storage_root() -> Result<PathBuf> {
    let current_exe = env::current_exe().ok();

    portable_storage_root(
        env::var_os(STORAGE_ENV_VAR),
        Path::new(env!("CARGO_MANIFEST_DIR")),
        current_exe.as_deref(),
        cfg!(debug_assertions),
    )
}

pub fn ensure_storage_dirs() -> Result<StoragePaths> {
    let paths = storage_paths()?;

    for path in [
        &paths.root,
        &paths.db_dir,
        &paths.config_dir,
        &paths.files_dir,
        &paths.logs_dir,
    ] {
        std::fs::create_dir_all(path)
            .with_context(|| format!("failed to create storage directory {}", path.display()))?;
    }

    Ok(paths)
}

fn portable_storage_root(
    env_override: Option<OsString>,
    cargo_manifest_dir: &Path,
    current_exe: Option<&Path>,
    debug_mode: bool,
) -> Result<PathBuf> {
    if let Some(path) = env_override {
        if !path.is_empty() {
            return Ok(PathBuf::from(path));
        }
    }

    if debug_mode {
        return cargo_manifest_dir
            .parent()
            .map(|project_root| project_root.join("storage"))
            .context("src-tauri directory should have a project root parent");
    }

    current_exe
        .and_then(Path::parent)
        .map(|exe_dir| exe_dir.join("storage"))
        .context("failed to locate executable directory for portable storage")
}

#[cfg(test)]
mod tests {
    use std::ffi::OsString;
    use std::path::{Path, PathBuf};

    #[test]
    fn uses_env_override_when_present() {
        let root = super::portable_storage_root(
            Some(OsString::from(r"D:\portable-catcat\data")),
            Path::new(r"D:\repo\catcat-email\src-tauri"),
            Some(Path::new(r"D:\apps\catcat-email\catcat-email.exe")),
            false,
        )
        .expect("env override should produce a storage path");

        assert_eq!(root, PathBuf::from(r"D:\portable-catcat\data"));
    }

    #[test]
    fn debug_mode_uses_project_root_storage() {
        let root = super::portable_storage_root(
            None,
            Path::new(r"D:\repo\catcat-email\src-tauri"),
            Some(Path::new(r"D:\apps\catcat-email\catcat-email.exe")),
            true,
        )
        .expect("debug mode should produce a storage path");

        assert_eq!(root, PathBuf::from(r"D:\repo\catcat-email\storage"));
    }

    #[test]
    fn release_mode_uses_executable_neighbor_storage() {
        let root = super::portable_storage_root(
            None,
            Path::new(r"D:\repo\catcat-email\src-tauri"),
            Some(Path::new(r"D:\apps\catcat-email\catcat-email.exe")),
            false,
        )
        .expect("release mode should produce a storage path");

        assert_eq!(root, PathBuf::from(r"D:\apps\catcat-email\storage"));
    }
}
