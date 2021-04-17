var dict = [];

export const capturePerformance = async (page, navigationStartTime) => {
  const finishTime = new Date().getTime();
  const firstMeaningfulPaintValue = finishTime - navigationStartTime;
  return firstMeaningfulPaintValue;

}

export const getAverage = async (firstMeaningfulPaintResults) => {
  return (firstMeaningfulPaintResults.reduce((a, b) => a + b, 0) / firstMeaningfulPaintResults.length);
}

export const saveFirstMeaningfulPaintResults = async (testPage, firstMeaningfulPaint) => {
  dict.push({ PageName: testPage, FirstMeaningfulPaintValue: Math.round((firstMeaningfulPaint / 1000) * 100) / 100 });
}

export const getFirstmeaningfulPaintResults = function () { return dict };










