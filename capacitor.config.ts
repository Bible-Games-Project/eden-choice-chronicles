import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.biblegames.eden',
  appName: ' Bible Story Game: Sacred Quest',
  webDir: 'dist',
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#000000'
  }
};

export default config;
