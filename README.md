# DVHMA

Damn Vulnerable Hybrid Mobile App (DVHMA) is an hybrid mobile app (for
Android) that *intentionally* contains vulnerabilities. Its purpose is
to enable security professionals to test their tools and techniques
legally, help developers better understand the common pitfalls in
developing hybrid mobile apps securely.

## Motivation and Scope

This app is developed to study pitfalls in developing hybrid apps,
e.g., using [Apache Cordova](https://cordova.apache.org/) or
[SAP Kapsel](https://blogs.sap.com/2013/10/21/an-introduction-to-smp-kapsel/),
securely. Currently, the main focus is to develop a deeper
understanding of injection vulnerabilities that exploit the JavaScript
to Java bridge.

## Installation

### Prerequisites

We assume that the

* Android SDK (https://developer.android.com/sdk/index.html) and 
* Apache Cordova (https://cordova.apache.org/), version 8.0.0 (later
  versions might work) 

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
    cordova platform add android
    cordova compile android

#### Running DVHMA in an Emulator

    cordova run android 

## Team Members

The development of this application started as part of the project 
[ZertApps](http://www.zertapps.de). ZertApps was a collaborative 
research project funded by the German Ministry for Research and 
Education. It is now developed and maintained by the [Software 
Assurance & Security Research Team](https://logicalhacking.com) 
at The University of Sheffield, UK. 

The core developers of DVHMA are:
* [Achim D. Brucker](http://www.brucker.ch/)
* [Michael Herzberg](http://www.dcs.shef.ac.uk/cgi-bin/makeperson?M.Herzberg)

## License

This project is under the Apache 2.0 License. 

## Publications

* Achim D. Brucker and Michael Herzberg. [On the Static Analysis of
  Hybrid Mobile Apps: A Report on the State of Apache Cordova
  Nation.](https://www.brucker.ch/bibliography/download/2016/brucker.ea-cordova-security-2016.pdf)
  In International Symposium on Engineering Secure Software
  and Systems (ESSoS). Lecture Notes in Computer Science (9639), pages
  72-88, Springer-Verlag, 2016.
  https://www.brucker.ch/bibliography/abstract/brucker.ea-cordova-security-2016
  doi: [10.1007/978-3-319-30806-7_5](http://dx.doi.org/10.1007/978-3-319-30806-7_5)
