import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    addressType: {
      type: String,
      enum: ["residential", "non_residential"],
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    familyMembers: {
      type: Number,
      default: 0,
    },
    adharNumber: {
      type: String,
    },
    adharAttachment: {
      type: String,
    },
    phoneNo: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    respondentName: {
      type: String,
    },
    respondentRelation: {
      type: String,
    },
    familyDetails: {
      male: {
        type: Number,
        default: 0,
      },
      female: {
        type: Number,
        default: 0,
      },
      children: {
        below18: {
          type: Number,
          default: 0,
        },
        above18: {
          type: Number,
          default: 0,
        },
      },
    },
    propertyDetails: {
      ward: {
        type: Number,
      },
      wardName: {
        type: String,
      },
      GaliName: {
        type: String,
      },
      yojnaName: {
        type: String,
      },
      houseId: {
        type: Number,
      },
      yearOfConstruction: {
        type: Date,
      },
      mainOccupation: {
        type: String,
      },
      remarks: {
        type: String,
      },
    },
    addressDetails: {
      locationImage: {
        type: String,
      },
      categoryOfHouse: {
        type: String,
      },
      vacentPlot: {
        type: Boolean,
      },
      roadWidth: {
        type: Number,
      },
    },
    addressSpecification: {
      numberOfFloor: {
        type: Number,
      },
      numberOfRoom: {
        type: Number,
      },
      totalArea: {
        type: String,
      },
      totalOpenArea: {
        type: String,
      },
      waterConnection: {
        type: Boolean,
      },
      categoryOfWaterConnection: {
        type: String,
      },
      electricityConnection: {
        type: Boolean,
      },
      roadType: {
        type: String,
      },
    },
    otherDetails: {
      propertyPicture: {
        type: String,
      },
      supportDocuments: {
        type: String,
      },
      remarks: {
        type: String,
      },
      surveyername: {
        type: String,
      },
      phoneNumber: {
        type: String,
        match: [/^\d{10}$/, "Phone number must be 10 digits"],
      },
      taxamount: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
