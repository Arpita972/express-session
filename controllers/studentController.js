class StudentController {
  static get_seesioninfo = (req, res) => {
    try {
      if (req.session != null) {
        console.log(req.session.userdata);
        res.send(req.session.userdata.uname);
      }
    } catch (e) {
      //console.log(e);
      res.send("session expired");
    }
  };

  static set_sessioninfo = (req, res) => {
    req.session.userdata = { uname: "arpita", pass: "dey700" };
    res.send("data set in session");
  };

  static delete_session = (req, res) => {
    req.session.destroy(() => {
      console.log(`Session Deleted... Cannot Access Session `);
    });
    res.send("Session Deleted");
  };
}

export default StudentController;
