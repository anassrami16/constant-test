const pages = [".page-1", ".page-2", ".page-3"];
const MAX = 3;
const MIN = 1;
let current = 1;

$(".next").click(function (e) {
  if (current < MAX) {
    current += 1;
    updatePage(".page-" + current);
  }
});
$(".back").click(function (e) {
  if (current > MIN) {
    current -= 1;
    updatePage(".page-" + current);
  }
});
function updatePage(selector) {
  pages.forEach((element) => {
    if (selector === element) {
      $(element).show();
    } else {
      $(element).hide();
    }
  });
}
updatePage(".page-1");
