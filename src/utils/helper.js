export function filterData(searchInput, allRestaurant) {
  return allRestaurant.filter((resto) =>
    resto.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}