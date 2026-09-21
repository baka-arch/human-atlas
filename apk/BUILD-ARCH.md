# Build APK on Arch Linux - Quick Start

## Step 1: Install Java (Run these commands)
```bash
sudo pacman -S jdk-openjdk
```

## Step 2: Set Environment Variables (Add to ~/.zshrc or ~/.bashrc)
```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=$HOME/Android/Sdk
```

**OR** run immediately in this terminal:
```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=$HOME/Android/Sdk
```

## Step 3: Build APK
```bash
cd /home/senku/human-atlas/apk/android
./gradlew assembleDebug
```

## Step 4: Find Your APK
```bash
ls -lh app/build/outputs/apk/debug/app-debug.apk
```

---

## Alternative: Install Android Studio (Easier GUI)
```bash
# Option A: Tarball from Google (recommended)
wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.1.1.25/android-studio-2023.1.1.25-linux.tar.gz
tar -xzf android-studio-2023.1.1.25-linux.tar.gz
./android-studio/bin/studio.sh  # Open GUI, then File > Open > select apk/android/
```

```bash
# Option B: Arch User Repository (AUR)
yay -S android-studio
# Then open GUI and load: /home/senku/human-atlas/apk/android/
```

In Android Studio: **Build > Build Bundle(s) / APK(s) > Build APK(s)**

---

## Transfer APK to Phone
```bash
# Via USB (requires adb)
adb install app/build/outputs/apk/debug/app-debug.apk

# Or share via network
cd app/build/outputs/apk/debug
python3 -m http.server 8080
# Open http://192.168.x.x:8080 on phone browser and download
```
