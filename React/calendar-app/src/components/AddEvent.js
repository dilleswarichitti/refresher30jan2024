import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import './AddEvent.css';
import MenuItem from '@mui/material/MenuItem';
 
const defaultTheme = createTheme();
 
function AddEvent() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startdatetime, setStartDateTime] = React.useState("");
  const [enddatetime, setEndDateTime] = React.useState("");
  const [notificationdatetime, setNotificationDateTime] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [isrecurring, setIsRecurring] = React.useState(false);
  const [recurring_frequency, setRecurring_frequency] = React.useState("");
  const [shareeventwith, setShareEventWith] = React.useState("");
  const [access, setAccess] = React.useState("");
  const [category, setCategory] = React.useState("");
 
  var event;
  var clickAdd = () => {
      alert('You clicked the button');
      // Get the current date
      const currentDate = new Date();
      // Convert startdatetime to a Date object
      const startDate = new Date(startdatetime);
      // Check if the startdatetime is in the past
      if (startDate < currentDate) {
          alert("Cannot add events for past dates.");
          return;
      }
  
      // Proceed to add the event
      event = {
          "title": title,
          "description": description,
          "startdatetime": startdatetime,
          "enddatetime": enddatetime,
          "notificationdatetime": notificationdatetime,
          "location": location,
          "isrecurring": isrecurring,
          "recurring_frequency": recurring_frequency,
          "shareeventwith": shareeventwith,
          "access": access,
          "category": category,
          "email": localStorage.getItem("email")
      };
  
      console.log(event);
  
      fetch('https://localhost:7117/api/Event', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("token")
          },
          body: JSON.stringify(event)
      }).then(
          () => {
              alert("Event Added");
              window.location.reload();
          }
      ).catch((e) => {
          console.log(e);
      });
  };
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
            />
               <TextField
              margin="normal"
              fullWidth
              id="startdatetime"
              label="StartDateTime"
              name="startdatetime"
              multiline
              rows={4}
              value={startdatetime}
              onChange={(e) => { setStartDateTime(e.target.value) }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="enddatetime"
              label="EndDateTime"
              name="enddatetime"
              multiline
              rows={4}
              value={enddatetime}
              onChange={(e) => { setEndDateTime(e.target.value) }}
            />
               <TextField
              margin="normal"
              fullWidth
              id="notificationdatetime"
              label="NotificationDateTime"
              name="notificationdatetime"
              multiline
              rows={4}
              value={notificationdatetime}
              onChange={(e) => { setNotificationDateTime(e.target.value) }}
            />
               <TextField
              margin="normal"
              fullWidth
              id="location"
              label="Location"
              name="location"
              multiline
              rows={4}
              value={location}
              onChange={(e) => { setLocation(e.target.value) }}
            />
              <TextField
              margin="normal"
              select
              fullWidth
              id="isrecurring"
              label="IsRecurring"
              name="isrecurring"
              value={isrecurring}
              onChange={(e) => { setIsRecurring(e.target.value) }}
            > 
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
            
            <TextField
              margin="normal"
              select
              fullWidth
              id="recurring_frequency"
              label="Recurring Frequency"
              name="recurring_frequency"
              value={recurring_frequency}
              onChange={(e) => { setRecurring_frequency(e.target.value) }}
              style={{ display: isrecurring ? 'block' : 'none' }}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="daily">EveryDay</MenuItem>
              <MenuItem value="weekly">EveryWeek</MenuItem>
              <MenuItem value="monthly">EveryMonth</MenuItem>
              <MenuItem value="yearly">EveryYear</MenuItem>
            </TextField>
            <TextField
              margin="normal"
              fullWidth
              id="shareeventwith"
              label="ShareEventWith"
              name="shareeventwith"
              multiline
              rows={4}
              value={shareeventwith}
              onChange={(e) => { setShareEventWith(e.target.value) }}
            />
            <TextField
              margin="normal"
              select
              fullWidth
              id="access"
              label="Access"
              name="access"
              value={access}
              onChange={(e) => { setAccess(e.target.value) }}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="private">Private</MenuItem>
             
            </TextField>
            <TextField
              margin="normal"
              select
              fullWidth
             
              id="category"
              label="Category"
              name="category"
              value={category}
              onChange={(e) => { setCategory(e.target.value) }}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="family">Family</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
             
            </TextField>
           
            <Button
              onClick={clickAdd}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#1976D2' }}
            >
              Add Event
            </Button>
            <Grid container>
              {/* Additional components such as links or other elements */}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddEvent;