const express = require('express');
const router = express.Router();
import LibChat from '../lib/LibChat';

/******
* index
* @param req: any
*
* @return object
*/ 
router.get('/index', async function(req: any, res: any) {
  try {
//    res.send({ name: "#index" });
    const result = await LibChat.getItems();
    res.json(result);
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
    console.log(req.params.id);
    const result = await LibChat.getItem(Number(req.params.id));
//console.log(result);
    res.json(result);
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
    const result = await LibChat.create(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* update
* @param req: any
*
* @return object
*/ 
router.post('/update', async function(req: any, res: any) {
  try {
    const result = await LibChat.update(req);
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
    const result = await LibChat.delete(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* search
* @param req: any
*
* @return object
*/ 
router.post('/search', async function(req: any, res: any) {
  try {
    const result = await LibChat.search(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;