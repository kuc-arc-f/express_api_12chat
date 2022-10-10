const express = require('express');
const router = express.Router();
import LibBookMark from '../lib/LibBookMark';

/******
* index
* @param req: any
*
* @return object
*/ 
router.post('/index', async function(req: any, res: any) {
  try {
    const result = await LibBookMark.getItems(req);
//console.log(result);
    res.json(result);
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
    const result = await LibBookMark.create(req);
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
    const result = await LibBookMark.delete(req);
//console.log(result);
    res.json(result);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});

export default router;