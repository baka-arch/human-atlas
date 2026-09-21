# Build Instructions — Dr. Riya's BHMS 3D Atlas (Android APK)

## What's Ready
- ✅ Capacitor Android project fully set up in `apk/android/`
- ✅ Web assets synced from `dist/` (the built React app)
- ✅ App configured: name="Dr. Riya's BHMS Atlas", ID=com.drriya.bhmsatlas

## To Generate the APK — You Need These On Your Machine

### Option A: Use Android Studio (Recommended, Easiest)
1. Download **Android Studio** → https://developer.android.com/studio
2. Open the project: `File > Open` → navigate to `/home/senku/human-atlas/apk/android/`
3. Wait for Gradle sync to complete (top-right spinner)
4. Click **Build > Build Bundle(s) / APK(s) > Build APK(s)**
5. Output APK will be at:
   ```
   apk/android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Option B: Command Line (Requires Java + Android SDK)
```bash
# Install Java if not present
sudo apt install openjdk-17-jdk

# Set ANDROID_HOME (adjust path if needed)
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin

# Add Android SDK platform-tools (if missing)
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "build-tools;34.0.0" "platforms;android-34"

# Build from this directory
cd /home/senku/human-atlas/apk/android
./gradlew assembleDebug
```
Output APK: `app/build/outputs/apk/debug/app-debug.apk`

## Files Structure
```
human-atlas/
├── apk/                      # Created for Android build
│   ├── package.json          # Capacitor dependencies
│   ├── capacitor.config.json # App configuration
│   └── android/              # Generated Android project (ready to build)
│       ├── app/
│       ├── gradle/
│       ├── gradlew           # Gradle wrapper
│       └── build.gradle
├── app/                      # React source
├── public/models/            # 3D anatomy data (~90MB)
└── dist/                     # Built web app
```

## Notes
- The APK will be ~100MB due to embedded model chunks
- Service worker + PWA are included (offline-ready when installed)
- For production releases: update signing config in `android/app/build.gradle`
