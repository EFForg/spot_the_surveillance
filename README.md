# Spot the Surveillance
Spot the Surveillance is an open-source educational VR tool to help people identify street-level surveillance in their community. As each surveillance device is identified, the user is informed on how the device is used via text and narration. The experience is created with accessibility in mind, so is entirely gaze-based for people with mobility challenges. Audio is also used to assist low-vision users.

For users who find the experience challenging, there is an "easy mode" which is activated by a button the using can click before starting the experience. This mode has a visual indicator of where all the devices are so the user can identify them more easily.

There is also a Spanish version available at index-es.html, Descubre La Vigilancia.

## Version 1.2
Changes since 1.1:
- Easy mode
- Spanish version
- Upgrades to performance including smaller image and audio files to speed up loading time
- more consistent audio playing
- Several changes to improve the experience for low-vision users, including: 
    - making the "X" to close the information cards more visible
    - More clearly recognizable arrows to direct user to congratulations card
- user can reopen all information cards at the end of the experience
- repositioned congratulations card to make it less "cramped" in between other cards
- Bug fixes to many gazed-based interactions
- code refactoring for easier readability

## Version 1.1
Spot the Surveillance is an open-source educational VR tool to help people identify street-level surveillance in their community. As each surveillance device is identified, the user is informed on how the device is used via text and narration. The experience is created with accessibility in mind, so is entirely gaze-based for people with mobility challenges. Audio is also used to assist low-vision users.

Spot the Surveillance uses Mozilla's Aframe web framework: https://aframe.io/

## How to run the experience
To run locally:
After cloning/downloading, you'll need to launch a web server. An easy way to do this is by running SimpleHTTPServer:
python -m SimpleHTTPServer 8000

Then to see the site, naviate to: http://localhost:8000

The live version of this site can be found at: https://eff.org/spot-vr

### A project of Electronic Frontier Foundation.
This project is licensed under GNU General Public License v3.0.
