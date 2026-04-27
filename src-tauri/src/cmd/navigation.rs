use crate::core::email::receive;

#[tauri::command]
pub fn receive_email() {
    let _ = receive::receive_email().unwrap();
}