# Walk-trough app (AHA guidelines in CPR)

## Project topic and description:

Even though the resuscitation of a person is a very critical effort in medicine it still has some very large space for human-error. The algorithm designed by the AHA on its ACLS course constantly changes, there is one high-skilled member of the resuscitation team whose sole responsibility is to write-down times on a whiteboard, and there is no feedback to the team about their performance rates. These things considered, ‘Revive’ was conceived. Revive is a mobile app that will assist resuscitation teams on the decision-making process, release one member of the team of his/her current duties, improve the accuracy of the patient’s records, and provide feedback about the outcomes of the efforts.

## Quick Start

Things you need to install:
- node. Use [nvm](https://github.com/nvm-sh/nvm) to install the latest LTS version

Open a terminal and follow these instructions:

```sh
# clone the repo
git clone git@github.com:Danisauri/Revive.git

# open the project directory
cd Revive/ACLSbuddy/

# install the dependencies of the project
npm i

# run the server!
npm start
```

If everything went well, you will see a message in the terminal saying that
> ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Open the link in your favorite browser, open DevTools and resize the browser to look like a mobile device.

## Structure of this package

- **CPR:** Walk-through through the ACLS flowchart in face of a cardiac arrest. Confirmation buttons imply the recognition of completing the instruction and automatically register the times.

- **History:** All the CPRs performed with the app. Each event has a colored icon indicating if the patient's information associated with the event is complete, partially-complete, or empty.

- **Statistics:** Patients statistics depict the characteristics of the population attended by the client. 

- **Demo Mode:** Access to the Demo Mode through the menu to get an abbreviated version of the CPR (reduced times to facilitate navigation).
