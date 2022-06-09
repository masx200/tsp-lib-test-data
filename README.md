# tsp-lib-test-data

#### 介绍

把 tsp 数据库当中的二维坐标转换成类似于 JSON 的格式输出.

只处理有二维坐标的,其他不处理

#### 数据来源

MP-TESTDATA - The TSPLIB Symmetric Traveling Salesman Problem Instances

http://elib.zib.de/pub/mp-testdata/tsp/tsplib/tsp/index.html

另一个数据来源

https://github.com/rhgrant10/tsplib95/tree/master/archives/problems/tsp

TSP 的已知最优解

https://gitee.com/masx200/tsp-lib-test-data/blob/master/TSP%E7%9A%84%E5%B7%B2%E7%9F%A5%E6%9C%80%E4%BC%98%E8%A7%A3.txt

参考文献:

https://blog.csdn.net/junzhepan/article/details/8498707

#### 软件架构

软件架构说明

#### 安装教程

```
yarn add "@masx200/tsp-lib-test-data"
```

#### 使用说明

1.getNodeCoordinates

```js
import { getNodeCoordinates } from "@masx200/tsp-lib-test-data";
const a280 = await getNodeCoordinates("a280");
console.log(a280);
```

```json
[
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
    [280, 133]
]
```

2.getNames

```js
import { getNames } from "@masx200/tsp-lib-test-data";

console.log(getNames());
```

```json
[
    "kroA100",
    "kroB100",
    "kroC100",
    "kroD100",
    "kroE100",
    "rand100",
    "rd100",
    "dsj1000",
    "pr1002",
    "eil101",
    "lin105",
    "u1060",
    "pr107",
    "vm1084",
    "pcb1173",
    "rl11849",
    "gr120",
    "pr124",
    "bier127",
    "d1291",
    "ch130",
    "rl1304",
    "rl1323",
    "usa13509",
    "pr136",
    "nrw1379",
    "fl1400",
    "brd14051",
    "u1432",
    "pr144",
    "ch150",
    "kroA150",
    "kroB150",
    "d15112",
    "pr152",
    "fl1577",
    "u159",
    "d1655",
    "vm1748",
    "u1817",
    "d18512",
    "rl1889",
    "rat195",
    "d198",
    "kroA200",
    "kroB200",
    "rand200",
    "d2103",
    "u2152",
    "ts225",
    "tsp225",
    "pr226",
    "u2319",
    "pr2392",
    "gil262",
    "pr264",
    "a280",
    "bayg29",
    "bays29",
    "pr299",
    "rand300",
    "pcb3038",
    "lin318",
    "linhp318",
    "pla33810",
    "fl3795",
    "rand400",
    "rd400",

    "fl417",
    "dantzig42",
    "pr439",
    "pcb442",
    "fnl4461",
    "d493",
    "rand50",
    "eil51",
    "berlin52",
    "pa561",
    "u574",
    "rat575",
    "rl5915",
    "rl5934",
    "p654",
    "d657",
    "st70",
    "u724",
    "pla7397",
    "rand75",
    "eil76",
    "pr76",
    "rat783",
    "pla85900",
    "rat99"
]
```

3.getDimension

```js
import { getDimension } from "@masx200/tsp-lib-test-data";

console.log(getDimension("a280") === 280);
```

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
