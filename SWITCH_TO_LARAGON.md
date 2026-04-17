# Switch from Herd Lite to Laragon (Better Windows PHP)

## Why Laragon?
- Full PHP with GD, Imagick, and all extensions
- MySQL/PostgreSQL included
- Redis, Memcached included
- No configuration needed - works out of the box

## Installation Steps

### 1. Download Laragon
- Go to: https://laragon.org/download/
- Download Laragon Full (~180 MB) or Portable

### 2. Install Laragon
- Install to `C:\laragon` (default)
- It comes with PHP 8.2+ with full GD support

### 3. Move Your Project
```powershell
# Copy your project to Laragon's www folder
Copy-Item -Recurse "C:\Users\Reinhardtdev\Documents\nerdpilots-blog" "C:\laragon\www\nerdpilots-blog"
```

### 4. Start Laragon
- Open Laragon
- Click "Start All"
- Your site will be at: `http://nerdpilots-blog.test`

### 5. Verify GD Works
```bash
cd C:\laragon\www\nerdpilots-blog
C:\laragon\bin\php\php-8.2.0-Win32-vs16-x64\php.exe -r "var_dump(gd_info()['JPEG Support']);"
# Should output: bool(true)
```

### 6. Update Environment
Update `.env`:
```
APP_URL=http://nerdpilots-blog.test
```

### 7. Clear Caches
```bash
php artisan cache:clear
php artisan config:clear
php artisan statamic:glide:clear
```

## Alternative: Use WSL2 (Windows Subsystem for Linux)

If you prefer Linux environment on Windows:

1. Install WSL2: `wsl --install` in PowerShell (Admin)
2. Install Ubuntu from Microsoft Store
3. Install PHP with GD inside WSL2:
   ```bash
   sudo apt update
   sudo apt install php8.4 php8.4-gd php8.4-mysql php8.4-curl php8.4-mbstring
   ```
4. Access your project through WSL2

## Quick Test

After switching, test if images work:
- Direct: `http://nerdpilots-blog.test/assets/cleaning-business-start-up-cost.jpg`
- Resized: `http://nerdpilots-blog.test/img/asset/YXNzZXRzL2NsZWFuaW5nLWJ1c2luZXNzLXN0YXJ0LXVwLWNvc3QuanBn?w=200`
