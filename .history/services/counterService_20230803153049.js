

export default function counterService(db) {
    async function getCount() {
        try {
          const result = await db.one('SELECT COUNT(DISTINCT name) as total_count FROM users')
          return result.total_count;
        } catch (err) {
          console.error(err)
        }
      }
  
      return {
        getCount
      }

}