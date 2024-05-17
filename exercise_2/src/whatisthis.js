function x(y) {
  var a = [1, 2, 3, 4, 5];
  var b = 0;
  for (var i = 0; i < a.length; i++) {
    b += a[i];
  }
  var c = b / a.length;
  var d = [];
  for (var i = 0; i < a.length; i++) {
    d.push(a[i] - c);
  }
  var e = 0;
  for (var i = 0; i < d.length; i++) {
    e += d[i] * d[i];
  }
  var f = e / (d.length - 1);
  var g = Math.sqrt(f);
  var h = (y - c) / g;
  var j = [];
  for (var i = 0; i < a.length; i++) {
    j.push((a[i] - c) / g);
  }
  var k = 0;
  for (var i = 0; i < j.length; i++) {
    k += j[i] * j[i];
  }
  var l = k / (j.length - 1);
  var m = Math.sqrt(l);
  var n = h / m;

  return n;
}

module.exports = x;
