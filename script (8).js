function generatePass() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let pass = "";
    
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        pass += chars[randomIndex];
    }
    
    document.getElementById("password").value = pass;
}