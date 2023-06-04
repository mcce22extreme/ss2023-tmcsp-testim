# ss2023-tmcsp-testim

Technical management of cloud solutions PT module testing

## Task

Automated testing of Tricentis Insurance Calculator App Android with Tricentis Testim and GitLab CI as CI/CD platform.

The test case created in the task is to be executed automatically in a pipeline on a HeadSpin device. A manual trigger is sufficient.

Deliverables
- A project documentation is to be handed in, which contains all the configuration steps that have been carried out
- The configuration itself should also be presented in a live demo on 22.06. be presented

The following screens are to be automated for a test case:
- Home screen
- Vehicle Data
- Person Data
- Product Details
- Quote

All dropdown menus in the app are to be automated in such a way that they mimic the user interactions of a real user

The vehicle information in the Quote Page should be validated.
- Make, Year of construction, Performance, Fuel, Mileage Per Year, List price

## Setup

A lot of tools are involved in this whole project, some need to talk to each other. This chapter is about configuration and enabling data exchange between the involved tools.

### Headspin

Login to [Headspin](https://www.headspin.io/) and go to the [user profile](https://ui.headspin.io/mysettings) page.

Make sure to get an API token and save it for later use.

Also make sure there are some Android devices available for you on the [devices](https://ui.headspin.io/remotecontrol/devices) page.

### Local Android emulator

Make sure to have Android Studio up and running, where you can easily configure Android simulators.

To avoid some issues with the App caused by unforeseeable issues with orientation changes, some configuration is required.

Configure a simulated device to have the following settings:
- Startup orientation: Landscape
- Graphics: Software - GLES 2.0

Example see here:

![android_simulator_settings.png](.docs/images/android_simulator_settings.png)

(Re)start the simulator afterwards.
