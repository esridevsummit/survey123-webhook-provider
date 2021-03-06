/**
 * This function extracts and formats the information we want
 * from the Survey123 response body.
 */
export function extractSubmissionInfo (surveyResponse) {
  return {
    username: surveyResponse.userInfo.username,
    firstName: surveyResponse.userInfo.firstName,
    industry: surveyResponse
      .applyEdits[0]
      .adds[0]
      .attributes['what_industry_do_you_work_in'].toLowerCase()
  };
};