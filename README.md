# Rate my Courses

**Team Name**: Wacky Web Wizards 

**Team Members**: Serlina Ku (sku6), Serena Gong (sxgong2), Adrianne Sun (ajsun2), Wendy Ruan (wruan), Kelly Shih (kshih7)

## About Our Project

### Problem Statement + Motivation
We want to create a more personal and student focused course explorer app with real student feedback. Oftentimes students can search for classes on course explorer, but it doesn’t really give great insight on the course aside from basic course details and its course description. A lot of students have to rely on online forums or word of mouth to discover recommended courses by their peers or upperclassmen. 

### User problems that we are solving
* The current course explorer is not being tailored specifically for the student body 
* UIUC currently lacks a centralized place for student course feedback, there is a dependence on browsing forums like Reddit or word of mouth from friends
* Give students more insight on the course to better determine their desired schedule

### Other apps that are similar
* Course Explorer
* Rate My Professor

### How our app is different
Our app will be a more student-friendly and interactive version of Course Explorer. We will have similar functionalities but students will be able to rate courses they have taken in the past on a scale of 0 to 5 stars and leave comments/feedback about the class. In addition to course information, the average of all student ratings will be displayed when a user searches up a class they are interested in learning more about. Students will be able to use the ratings and browse comments to determine if they want to take a class or not, similar to how Rate My Professor works but for classes instead of professors. 


## How to connect to frontend & backend
A little how-to run frontend + backend to see our webstie!


In the project directory `/backend`, add a new file `.env` with the code below.

```
DB_HOST=34.172.119.90
DB_USER=root        
DB_PASSWORD=cs409yay 
DB_DATABASE=rate_courses
```
Then in terminal do:
```bash
cd backend
npm install
npm start
```
Check Terminal for errors:

| Error Message | How to resolve |
| ------------- | ------------- |
| Time out  | Add IP Address to GCP  |

If there are no errors it should display:
```
Connected to the database!
Server running on port 5001
```

In a new terminal:
```
cd frontend
npm install
npm start
```

If there are no errors it should open on `localhost:3000`