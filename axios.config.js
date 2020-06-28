const API_TOKEN = `REqEgVoV9TkKaIaePQAHjvwAYELZkkFRoJWZE8aWyih94CdShOTgZV3dkl71`
axios.defaults.baseURL = 'https://course-ec-api.hexschool.io/api/f7828c74-e344-45f1-a069-f542ff88c6fc'
axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`
