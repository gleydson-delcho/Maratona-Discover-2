let data = {
  name: 'Gleydson',
  avatar: 'https://avatars.githubusercontent.com/u/69468992?v=4',
  "monthly-budget": 4000,
  "hours-per-day": 6,
  "days-per-week": 6,
  "vacation-per-year": 4,
  "value-hour": 75
};

module.exports = { 
  get(){
    return data;
  },

  update(newData) {
    data = newData;
  }
}
