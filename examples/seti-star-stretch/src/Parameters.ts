// define a global variable containing the script's parameters
export const StarStretchParameters = {
  amount: 5,
  targetView: new View() as View | null, // Default target view
  satAmount: 1, // Default saturation amount
  removeGreen: false, // Default SCNR option
  saturationLevel: [
    [0.0, 0.4],
    [0.5, 0.7],
    [1.0, 0.4],
  ] as Array<[number, number]>,

  // stores the current parameters values into the script instance
  save: function () {
    Parameters.set("amount", StarStretchParameters.amount);
    Parameters.set("satAmount", StarStretchParameters.satAmount);
    Parameters.set("removeGreen", StarStretchParameters.removeGreen);
  },

  // loads the script instance parameters
  load: function () {
    if (Parameters.has("amount"))
      StarStretchParameters.amount = Parameters.getReal("amount");
    if (Parameters.has("satAmount"))
      StarStretchParameters.satAmount = Parameters.getReal("satAmount");
    if (Parameters.has("removeGreen"))
      StarStretchParameters.removeGreen = Parameters.getBoolean("removeGreen");
  },

  // Update saturation level matrix based on satAmount
  updateSaturationLevel: function () {
    var satAmount = StarStretchParameters.satAmount;
    StarStretchParameters.saturationLevel = [
      [0.0, satAmount * 0.4],
      [0.5, satAmount * 0.7],
      [1.0, satAmount * 0.4],
    ] as Array<[number, number]>;
  },
};
