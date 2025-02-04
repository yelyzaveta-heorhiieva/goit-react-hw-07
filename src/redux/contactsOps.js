import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

axios.defaults.baseURL = "https://67a09d2c5bcfff4fabdff2fb.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
        return response.data;
    } catch (e) {
        toast.error('Request failed')
      return thunkAPI.rejectWithValue(e.message);
    } 
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", { name, number});
      return response.data;
    } catch (e) {
        toast.error('Adding new contact failed')
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
        toast.error('Deleting failed')
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({name, number, id}, thunkAPI) => {
    try {
        const response = await axios.put(`/contacts/${id}`, {name, number});
      return response.data;
    } catch (e) {
        toast.error('Editing failed')
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);