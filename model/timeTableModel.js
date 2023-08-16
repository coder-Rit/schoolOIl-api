const mongoose = require("mongoose");

const timeTableSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  
  clgShortName: {
    type: String,
    required: true,
  },
  timeTable: {
    Time: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },

    Monday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
    Tuesday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
    Wednesday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
    Thursday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
    Friday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
    Saturday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
    Sunday: {
      lecture1: {
        type: String,
        default: "",
      },
      lecture2: {
        type: String,
        default: "",
      },
      lecture3: {
        type: String,
        default: "",
      },
      lecture4: {
        type: String,
        default: "",
      },
      lecture5: {
        type: String,
        default: "",
      },
      lecture6: {
        type: String,
        default: "",
      },
      lecture7: {
        type: String,
        default: "",
      },
      lecture8: {
        type: String,
        default: "",
      },
      lecture9: {
        type: String,
        default: "",
      },
      lecture10: {
        type: String,
        default: "",
      },
    },
  },
});

module.exports = mongoose.model("timeTable", timeTableSchema);
