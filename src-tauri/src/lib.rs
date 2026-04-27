mod cmd;
mod core;

mod app_init {
    use super::*;

        pub fn generate_handlers() -> impl Fn(tauri::ipc::Invoke<tauri::Wry>) -> bool + Send + Sync + 'static {
        tauri::generate_handler![
            cmd::navigation::receive_email,
        ]
    }

}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(app_init::generate_handlers())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
