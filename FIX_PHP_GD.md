# Fix PHP GD JPEG Support

## Problem
Herd Lite's PHP is compiled without JPEG support in GD extension.
Error: `Call to undefined function Intervention\Image\Gd\imagecreatefromjpeg()`

## Solution 1: Download Proper PHP Build (Recommended)

1. **Download PHP 8.4 NTS (Non-Thread Safe) VS17 x64:**
   - Go to: https://windows.php.net/download/
   - Download: `VS17 x64 Non Thread Safe (2024-Dec-17 10:11:51)`
   - Or direct: https://windows.php.net/downloads/releases/php-8.4.1-nts-Win32-vs17-x64.zip

2. **Extract and Replace Herd Lite PHP:**
   ```powershell
   # Backup current PHP
   cd C:\Users\Reinhardtdev\.config\herd-lite\bin
   mv php.exe php.exe.backup
   
   # Extract new PHP to this folder
   # Copy php.exe from downloaded zip to this folder
   ```

3. **Create proper php.ini:**
   ```ini
   variables_order = "GPCS"
   opcache.enable=1
   opcache.enable_cli=1
   
   ; Enable GD Extension (compiled in with JPEG support)
   extension=gd
   extension=exif
   extension=fileinfo
   extension=mbstring
   extension=openssl
   extension=pdo_mysql
   extension=curl
   
   memory_limit = 256M
   upload_max_filesize = 20M
   post_max_size = 20M
   ```

## Solution 2: Use Laragon (Easiest)

1. Download Laragon from: https://laragon.org/download/
2. Install and use its PHP (comes with full GD support)
3. Update your PATH to use Laragon's PHP

## Solution 3: Install Imagick Extension

1. Download Imagick for PHP 8.4 NTS x64:
   - https://pecl.php.net/package/imagick
   - Or: https://windows.php.net/downloads/pecl/releases/imagick/

2. Place `php_imagick.dll` in `C:\Users\Reinhardtdev\.config\herd-lite\bin\ext\`

3. Add to php.ini:
   ```ini
   extension=imagick
   ```

4. Then switch Statamic to use Imagick:
   ```php
   // In config/statamic/assets.php
   'driver' => 'imagick',
   ```

## Quick Test After Fix

```bash
php -r "var_dump(gd_info());"
```

Should show: `['JPEG Support'] => true`
