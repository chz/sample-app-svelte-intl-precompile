export default {
  "plain": "Some text without interpolations",
  "interpolated": "A text where I interpolate the value: {val}",
  "time": "Now is {now, time}",
  "number": "My favorite number is {n, number}",
  "pluralized": "I have {count, plural,=0 {no cats} =1 {one cat} other {{count} cats}}",
  "pluralized-with-hash": "I have {count, plural, zero {no cats} one {just # cat} =2 {# cats} =3 {# cats} other {a lot of cats}}",
  "selected": "{gender, select, male {He is a good boy} female {She is a good girl} other {They are good fellas}}",
}