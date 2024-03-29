import { tsp2json } from "../bin/tsp2json";
import { expect, it as it } from "vitest";
it("tsp2json-eof-NODE_COORD_SECTION", () => {
    console.log("tsp2json-eof");
    const input = `NAME : a280
COMMENT : drilling problem (Ludwig)
TYPE : TSP
DIMENSION: 280
EDGE_WEIGHT_TYPE : EUC_2D
NODE_COORD_SECTION
  1 288 149
  2 288 129
  3 270 133
  4 256 141
  5 256 157
  6 246 157
  7 236 169
  8 228 169
  9 228 161
 10 220 169
 11 212 169
 12 204 169
 13 196 169
 14 188 169
 15 196 161
 16 188 145
 17 172 145
 18 164 145
 19 156 145
 20 148 145
 21 140 145
 22 148 169
 23 164 169
 24 172 169
 25 156 169
 26 140 169
 27 132 169
 28 124 169
 29 116 161
 30 104 153
 31 104 161
 32 104 169
 33  90 165
 34  80 157
 35  64 157
 36  64 165
 37  56 169
 38  56 161
 39  56 153
 40  56 145
 41  56 137
 42  56 129
 43  56 121
 44  40 121
 45  40 129
 46  40 137
 47  40 145
 48  40 153
 49  40 161
 50  40 169
 51  32 169
 52  32 161
 53  32 153
 54  32 145
 55  32 137
 56  32 129
 57  32 121
 58  32 113
 59  40 113
 60  56 113
 61  56 105
 62  48  99
 63  40  99
 64  32  97
 65  32  89
 66  24  89
 67  16  97
 68  16 109
 69   8 109
 70   8  97
 71   8  89
 72   8  81
 73   8  73
 74   8  65
 75   8  57
 76  16  57
 77   8  49
 78   8  41
 79  24  45
 80  32  41
 81  32  49
 82  32  57
 83  32  65
 84  32  73
 85  32  81
 86  40  83
 87  40  73
 88  40  63
 89  40  51
 90  44  43
 91  44  35
 92  44  27
 93  32  25
 94  24  25
 95  16  25
 96  16  17
 97  24  17
 98  32  17
 99  44  11
100  56   9
101  56  17
102  56  25
103  56  33
104  56  41
105  64  41
106  72  41
107  72  49
108  56  49
109  48  51
110  56  57
111  56  65
112  48  63
113  48  73
114  56  73
115  56  81
116  48  83
117  56  89
118  56  97
119 104  97
120 104 105
121 104 113
122 104 121
123 104 129
124 104 137
125 104 145
126 116 145
127 124 145
128 132 145
129 132 137
130 140 137
131 148 137
132 156 137
133 164 137
134 172 125
135 172 117
136 172 109
137 172 101
138 172  93
139 172  85
140 180  85
141 180  77
142 180  69
143 180  61
144 180  53
145 172  53
146 172  61
147 172  69
148 172  77
149 164  81
150 148  85
151 124  85
152 124  93
153 124 109
154 124 125
155 124 117
156 124 101
157 104  89
158 104  81
159 104  73
160 104  65
161 104  49
162 104  41
163 104  33
164 104  25
165 104  17
166  92   9
167  80   9
168  72   9
169  64  21
170  72  25
171  80  25
172  80  25
173  80  41
174  88  49
175 104  57
176 124  69
177 124  77
178 132  81
179 140  65
180 132  61
181 124  61
182 124  53
183 124  45
184 124  37
185 124  29
186 132  21
187 124  21
188 120   9
189 128   9
190 136   9
191 148   9
192 162   9
193 156  25
194 172  21
195 180  21
196 180  29
197 172  29
198 172  37
199 172  45
200 180  45
201 180  37
202 188  41
203 196  49
204 204  57
205 212  65
206 220  73
207 228  69
208 228  77
209 236  77
210 236  69
211 236  61
212 228  61
213 228  53
214 236  53
215 236  45
216 228  45
217 228  37
218 236  37
219 236  29
220 228  29
221 228  21
222 236  21
223 252  21
224 260  29
225 260  37
226 260  45
227 260  53
228 260  61
229 260  69
230 260  77
231 276  77
232 276  69
233 276  61
234 276  53
235 284  53
236 284  61
237 284  69
238 284  77
239 284  85
240 284  93
241 284 101
242 288 109
243 280 109
244 276 101
245 276  93
246 276  85
247 268  97
248 260 109
249 252 101
250 260  93
251 260  85
252 236  85
253 228  85
254 228  93
255 236  93
256 236 101
257 228 101
258 228 109
259 228 117
260 228 125
261 220 125
262 212 117
263 204 109
264 196 101
265 188  93
266 180  93
267 180 101
268 180 109
269 180 117
270 180 125
271 196 145
272 204 145
273 212 145
274 220 145
275 228 145
276 236 145
277 246 141
278 252 125
279 260 129
280 280 133
EOF
`;
    const output = [
        [288, 149],
        [288, 129],
        [270, 133],
        [256, 141],
        [256, 157],
        [246, 157],
        [236, 169],
        [228, 169],
        [228, 161],
        [220, 169],
        [212, 169],
        [204, 169],
        [196, 169],
        [188, 169],
        [196, 161],
        [188, 145],
        [172, 145],
        [164, 145],
        [156, 145],
        [148, 145],
        [140, 145],
        [148, 169],
        [164, 169],
        [172, 169],
        [156, 169],
        [140, 169],
        [132, 169],
        [124, 169],
        [116, 161],
        [104, 153],
        [104, 161],
        [104, 169],
        [90, 165],
        [80, 157],
        [64, 157],
        [64, 165],
        [56, 169],
        [56, 161],
        [56, 153],
        [56, 145],
        [56, 137],
        [56, 129],
        [56, 121],
        [40, 121],
        [40, 129],
        [40, 137],
        [40, 145],
        [40, 153],
        [40, 161],
        [40, 169],
        [32, 169],
        [32, 161],
        [32, 153],
        [32, 145],
        [32, 137],
        [32, 129],
        [32, 121],
        [32, 113],
        [40, 113],
        [56, 113],
        [56, 105],
        [48, 99],
        [40, 99],
        [32, 97],
        [32, 89],
        [24, 89],
        [16, 97],
        [16, 109],
        [8, 109],
        [8, 97],
        [8, 89],
        [8, 81],
        [8, 73],
        [8, 65],
        [8, 57],
        [16, 57],
        [8, 49],
        [8, 41],
        [24, 45],
        [32, 41],
        [32, 49],
        [32, 57],
        [32, 65],
        [32, 73],
        [32, 81],
        [40, 83],
        [40, 73],
        [40, 63],
        [40, 51],
        [44, 43],
        [44, 35],
        [44, 27],
        [32, 25],
        [24, 25],
        [16, 25],
        [16, 17],
        [24, 17],
        [32, 17],
        [44, 11],
        [56, 9],
        [56, 17],
        [56, 25],
        [56, 33],
        [56, 41],
        [64, 41],
        [72, 41],
        [72, 49],
        [56, 49],
        [48, 51],
        [56, 57],
        [56, 65],
        [48, 63],
        [48, 73],
        [56, 73],
        [56, 81],
        [48, 83],
        [56, 89],
        [56, 97],
        [104, 97],
        [104, 105],
        [104, 113],
        [104, 121],
        [104, 129],
        [104, 137],
        [104, 145],
        [116, 145],
        [124, 145],
        [132, 145],
        [132, 137],
        [140, 137],
        [148, 137],
        [156, 137],
        [164, 137],
        [172, 125],
        [172, 117],
        [172, 109],
        [172, 101],
        [172, 93],
        [172, 85],
        [180, 85],
        [180, 77],
        [180, 69],
        [180, 61],
        [180, 53],
        [172, 53],
        [172, 61],
        [172, 69],
        [172, 77],
        [164, 81],
        [148, 85],
        [124, 85],
        [124, 93],
        [124, 109],
        [124, 125],
        [124, 117],
        [124, 101],
        [104, 89],
        [104, 81],
        [104, 73],
        [104, 65],
        [104, 49],
        [104, 41],
        [104, 33],
        [104, 25],
        [104, 17],
        [92, 9],
        [80, 9],
        [72, 9],
        [64, 21],
        [72, 25],
        [80, 25],
        [80, 25],
        [80, 41],
        [88, 49],
        [104, 57],
        [124, 69],
        [124, 77],
        [132, 81],
        [140, 65],
        [132, 61],
        [124, 61],
        [124, 53],
        [124, 45],
        [124, 37],
        [124, 29],
        [132, 21],
        [124, 21],
        [120, 9],
        [128, 9],
        [136, 9],
        [148, 9],
        [162, 9],
        [156, 25],
        [172, 21],
        [180, 21],
        [180, 29],
        [172, 29],
        [172, 37],
        [172, 45],
        [180, 45],
        [180, 37],
        [188, 41],
        [196, 49],
        [204, 57],
        [212, 65],
        [220, 73],
        [228, 69],
        [228, 77],
        [236, 77],
        [236, 69],
        [236, 61],
        [228, 61],
        [228, 53],
        [236, 53],
        [236, 45],
        [228, 45],
        [228, 37],
        [236, 37],
        [236, 29],
        [228, 29],
        [228, 21],
        [236, 21],
        [252, 21],
        [260, 29],
        [260, 37],
        [260, 45],
        [260, 53],
        [260, 61],
        [260, 69],
        [260, 77],
        [276, 77],
        [276, 69],
        [276, 61],
        [276, 53],
        [284, 53],
        [284, 61],
        [284, 69],
        [284, 77],
        [284, 85],
        [284, 93],
        [284, 101],
        [288, 109],
        [280, 109],
        [276, 101],
        [276, 93],
        [276, 85],
        [268, 97],
        [260, 109],
        [252, 101],
        [260, 93],
        [260, 85],
        [236, 85],
        [228, 85],
        [228, 93],
        [236, 93],
        [236, 101],
        [228, 101],
        [228, 109],
        [228, 117],
        [228, 125],
        [220, 125],
        [212, 117],
        [204, 109],
        [196, 101],
        [188, 93],
        [180, 93],
        [180, 101],
        [180, 109],
        [180, 117],
        [180, 125],
        [196, 145],
        [204, 145],
        [212, 145],
        [220, 145],
        [228, 145],
        [236, 145],
        [246, 141],
        [252, 125],
        [260, 129],
        [280, 133],
    ];
    expect(output).toEqual(tsp2json(input));
});
