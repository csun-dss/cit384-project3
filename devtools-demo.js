// Independent DevTools practice; Pixel's game state is not modified by these examples.
document.querySelector('#demo-logs').addEventListener('click', function () {
  console.info('PIXEL info: game diagnostics started');
  console.log('PIXEL log: care actions available');
  console.warn('PIXEL warning: cleanliness may need attention');
  console.error('PIXEL error: demonstration message');
  console.table([{stat: 'weight', value: pet_info.weight}, {stat: 'happiness', value: pet_info.happiness}, {stat: 'cleanliness', value: pet_info.cleanliness}]);
  console.group('PIXEL care summary');
  console.log('Name:', pet_info.name);
  console.log('Happiness:', pet_info.happiness);
  console.groupEnd();
  console.log('%cPIXEL custom styled message', 'color: white; background: #6741a5; padding: 4px; font-weight: bold');
});
document.querySelector('#demo-404').addEventListener('click', function () {
  // A missing image produces an actual browser network error when served over HTTP.
  const image = new Image();
  image.src = 'images/intentional-missing-devtools-file.png';
});
document.querySelector('#demo-typeerror').addEventListener('click', function () {
  const missingPet = undefined;
  missingPet.name; // Intentionally uncaught: DevTools reports a TypeError.
});
document.querySelector('#demo-slow').addEventListener('click', function () {
  const until = performance.now() + 600;
  while (performance.now() < until) { /* intentional long-running event handler */ }
});
document.querySelector('#demo-calculate').addEventListener('click', function () {
  const weightText = document.querySelector('#demo-weight').value;
  const treatText = document.querySelector('#demo-treats').value;
  const weight = Number(weightText);
  const extraWeight = Number(treatText) * 2;
  // Set a breakpoint on the following line to inspect weightText, weight and extraWeight.
  // Fix: replace weightText with Number(weightText) in the buggy branch.
  // const result = document.querySelector('#demo-bug').checked ? Number(weightText) + extraWeight : weight + extraWeight;
  const result = document.querySelector('#demo-bug').checked ? weightText + extraWeight : weight + extraWeight;
  document.querySelector('#demo-result').textContent = 'Calculated weight: ' + result + ' lb';
});
