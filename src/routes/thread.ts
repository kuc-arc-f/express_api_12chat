const express = require('express');
const router = express.Router();
import LibThread from '../lib/LibThread';

/******
* index
* @param req: any
*
* @return object
*/ 
router.post('/index', async function(req: any, res: any) {
  try {
    const result = await LibThread.getItems(req);
    res.json(result);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/******
* index_chats
* @param req: any
*
* @return object
*/ 
router.post('/index_chats', async function(req: any, res: any) {
  try {
    const result = await LibThread.index_chats(req);
    res.json(result);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/******
* search
* @param req: any
*
* @return array
*/ 
router.post('/search', async function(req: any, res: any) {
  try {
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/******
* get_last_time : 最新レコードを返す
* @param req: any
*
* @return object
*/ 
router.post('/get_last_time', async function(req: any, res: any) {
  try {
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* show
* @param req: any
*
* @return object
*/ 
router.get('/show/:id', async function(req: any, res: any) {
  try {
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});
/**
* create
* @param req: any
*
* @return object
*/ 
router.post('/create', async function(req: any, res: any) {
  try {
    const result = await LibThread.create(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* delete
* @param req: any
*
* @return object
*/ 
router.post('/delete', async function(req: any, res: any) {
  try {
    const result = await LibThread.delete(req);
//console.log(result);
    res.json(result);        
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});

export default router;