# Rate my Courses

**Team Name**: Wacky Web Wizards 

**Team Members**: Serlina Ku (sku6), Serena Gong (sxgong2), Adrianne Sun (ajsun2), Wendy Ruan (wruan), Kelly Shih (kshih7)


## How to connect to frontend & backend
A little how-to run frontend + backend to see our webstie!


In the project directory `/backend`, add a new file `.env` with the code below.

```
DB_HOST=34.172.119.90
DB_USER=root        
DB_PASSWORD=cs409yay 
DB_DATABASE=rate_courses
```
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