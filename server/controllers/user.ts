// import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err: Error, user: any) => {
      if (!user) { return res.sendStatus(403); }
      console.log(user.username + ' login');
      user.comparePassword(req.body.password, (error: Error, isMatch: any) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

}
