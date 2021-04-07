module.exports = {

    remainingDays(job) {
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
      const createdDate = new Date(job.created_at);
      const dueDay = createdDate.getDate() + Number(remainingDays);
      const dueDateinMS = createdDate.setDate(dueDay);

      const timeDiffinMS = dueDateinMS - Date.now();

      const dayinMS = 1000 * 60 * 60 * 24;
      const dayDiff = Math.floor(timeDiffinMS / dayinMS);

      return dayDiff;
    },

    calculateBudget(job, valueHour) {
      return valueHour * job["total-hours"];
    }
  }