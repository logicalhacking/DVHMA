# DVHMA
Damn Vulnerable Hybrid Mobile App (DVHMA) is an hybrid mobile app (for
Android) that *intentionally* contains vulnerabilities. Its purpose is
to enable security professionals to test their tools and techniques
legally, help developers better understand the common pitfalls in
developing hybrid mobile apps securely.

## Motivation and Scope
This app is developed to study pitfalls in developing hybrid apps,
e.g., using Apache Cordova or SAP Kapsel, securely. Currently, the
main focus is to develop a deeper understanding of injection
vulnerabilities that exploit the JavaScript to Java bridge.

## Installation
### Prerequisites
We assume that the
* Android SDK (https://developer.android.com/sdk/index.html) and 
* Apache Cordova (https://cordova.apache.org/), version 3.5 or later
are installed. 

Moreover, we assume a basic familiarity with the build system of 
Apache Cordova.

### Building DVHMA
#### Setting Environment Variables
    export ANDROID_HOME=<Android SDK Installation Directory>
    export PATH=$ANDROID_HOME/tools:$PATH
    export PATH=$ANDROID_HOME/platform-tools:$PATH

#### Compiling DVHMA
    cd DVHMA-Featherweight
    cordova plugin add ../plugins/DVHMA-Storage
    cordova plugin add ../plugins/DVHMA-WebIntent 
    cordova compile android

#### Running DVHMA in an Emulator
    cordova run android 

## Team Members
This application is developed as part of the project ZertApps
(Certified Security for Mobile Applications). ZertApps
(http://www.zertapps.de) is a collaborative research project funded by
the German Ministry for Research and Education. The core developers of
DVHMA are:
* [Achim D. Brucker](http://www.brucker.ch/)
* [Michael Herzberg](http://www.dcs.shef.ac.uk/cgi-bin/makeperson?M.Herzberg)

## License
This project is under the Apache 2.0 License. 
