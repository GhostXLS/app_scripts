const appck = process.env.APP_COOKIE;

const axios = require("axios");

const validIds = [
    {
        "name": '测试',
        "is_active": 1,
        "startTime": '00:00:00',
        "couponId": 'BEA9D26AEBD64F9A9680FE390A05654B',
        "intervalTime": 100,
        "gdId": "483094",
        "pageId": "484474",
        "instanceId": "16819754696590.74922283078048070"
    },
    {
        "name": '25-12(11点)',
        "is_active": 1,
        "startTime": '11:00:00',
        "couponId": '687D57731F804A2CAE1F455331F83524',
        "intervalTime": 100,
        "gdId": "379391",
        "pageId": "378925",
        "instanceId": "16619982800580.30892480633143027"
    },
    {
        "name": '25-12(15点)',
        "is_active": 1,
        "startTime": '15:00:00',
        "couponId": '35D2E964BB334BEF9239151847DACC02',
        "intervalTime": 100,
        "gdId": "513833",
        "pageId": "516533",
        "instanceId": "16890429573560.08766758935246644"
    },
    {
        "name": '25-12(17点)',
        "is_active": 1,
        "startTime": '17:00:00',
        "couponId": '419967B3A4064140BA78E6A046DF0FC1',
        "intervalTime": 100,
        "gdId": "379391",
        "pageId": "378925",
        "instanceId": "16619982800580.30892480633143027"
    }
];

if (process.env.testTime !== undefined) {
    if (process.env.testTime == 0) {
        validIds[0].startTime = new Date(new Date().getTime() + 60000).toTimeString().split(' ')[0];
        console.log("开启测试模式，测试时间为当前时间的下一分钟" + validIds[0].startTime)
    }
}

const repeat = 20  // 抢券默认请求次数(默认生成20条),

let offsetTime = 0  // 本地与美团平台时间戳偏移量
const syncTime = 3000  // 提前3s再次同步时间
const ticketingTime = 500  // 抢券提前时间提前500ms
const signTime = 10000  // sign生成时间（提前10s）
var version_ = 'jsjiami.com.v7';
const _0x184cf7 = _0xffac;
(function (_0x34ec08, _0x54ef08, _0x147248, _0x19993b, _0x30ade8, _0x21166e, _0x4df7c0) {
    return _0x34ec08 = _0x34ec08 >> 0x7, _0x21166e = 'hs', _0x4df7c0 = 'hs', function (_0x4b043d, _0x1110b6, _0xdb2c7a, _0x5e159d, _0x5ba624) {
        const _0x32efd0 = _0xffac;
        _0x5e159d = 'tfi', _0x21166e = _0x5e159d + _0x21166e, _0x5ba624 = 'up', _0x4df7c0 += _0x5ba624, _0x21166e = _0xdb2c7a(_0x21166e), _0x4df7c0 = _0xdb2c7a(_0x4df7c0), _0xdb2c7a = 0x0;
        const _0x3d7a98 = _0x4b043d();
        while (!![] && --_0x19993b + _0x1110b6) {
            try {
                _0x5e159d = -parseInt(_0x32efd0(0x2a8, '0@I)')) / 0x1 + parseInt(_0x32efd0(0x1d0, 'q2Tq')) / 0x2 * (-parseInt(_0x32efd0(0x25e, 'JH*i')) / 0x3) + -parseInt(_0x32efd0(0x2d2, 'h4$$')) / 0x4 * (parseInt(_0x32efd0(0x264, 'q12Y')) / 0x5) + -parseInt(_0x32efd0(0x2cd, '$LWh')) / 0x6 * (parseInt(_0x32efd0(0x1de, 'OYXF')) / 0x7) + parseInt(_0x32efd0(0x1eb, '[0Nk')) / 0x8 * (-parseInt(_0x32efd0(0x33e, 'n!Sk')) / 0x9) + -parseInt(_0x32efd0(0x2eb, 'tXw)')) / 0xa + -parseInt(_0x32efd0(0x233, 'MGx8')) / 0xb * (-parseInt(_0x32efd0(0x2fa, 'MGx8')) / 0xc);
            } catch (_0x2e2ecc) {
                _0x5e159d = _0xdb2c7a;
            } finally {
                _0x5ba624 = _0x3d7a98[_0x21166e]();
                if (_0x34ec08 <= _0x19993b) _0xdb2c7a ? _0x30ade8 ? _0x5e159d = _0x5ba624 : _0x30ade8 = _0x5ba624 : _0xdb2c7a = _0x5ba624; else {
                    if (_0xdb2c7a == _0x30ade8['replace'](/[VfFBeSdJLblAHxyNTPtrG=]/g, '')) {
                        if (_0x5e159d === _0x1110b6) {
                            _0x3d7a98['un' + _0x21166e](_0x5ba624);
                            break;
                        }
                        _0x3d7a98[_0x4df7c0](_0x5ba624);
                    }
                }
            }
        }
    }(_0x147248, _0x54ef08, function (_0x5adb79, _0x2b4ef8, _0x37651a, _0x3ee09e, _0x11738f, _0x1e02d9, _0x5c995e) {
        return _0x2b4ef8 = '\x73\x70\x6c\x69\x74', _0x5adb79 = arguments[0x0], _0x5adb79 = _0x5adb79[_0x2b4ef8](''), _0x37651a = `\x72\x65\x76\x65\x72\x73\x65`, _0x5adb79 = _0x5adb79[_0x37651a]('\x76'), _0x3ee09e = `\x6a\x6f\x69\x6e`, (0x1367ad, _0x5adb79[_0x3ee09e](''));
    });
}(0x6000, 0x7b6d0, _0x2fe6, 0xc2), _0x2fe6) && (version_ = _0x2fe6);

function getValidIds() {
    const _0x5887d2 = _0xffac, _0xb883f9 = {
        'PmyAr': _0x5887d2(0x1fb, 'KyRk'), 'ZBfAc': function (_0x560f8e, _0x1e1498) {
            return _0x560f8e + _0x1e1498;
        }, 'FdSGO': function (_0x41aea7, _0x46af7e) {
            return _0x41aea7 + _0x46af7e;
        }, 'nfqTT': function (_0x2e0756, _0x3ede09) {
            return _0x2e0756 >= _0x3ede09;
        }, 'BnTdI': function (_0x1a4605, _0x489a76) {
            return _0x1a4605 < _0x489a76;
        }, 'tcnmq': function (_0x4710b7, _0x30fdd8) {
            return _0x4710b7 - _0x30fdd8;
        }, 'AaDAc': function (_0x4e65c5, _0x46a179) {
            return _0x4e65c5 === _0x46a179;
        }, 'tAwUn': _0x5887d2(0x31b, 'n!Sk'), 'RrNxh': _0x5887d2(0x333, 'Qd9Y')
    };
    let _0x5c073e = null, _0x29cfa2 = Infinity;
    const _0x5cb2a9 = new Date()[_0x5887d2(0x302, '2qGK')]();
    for (const _0x476293 of validIds) {
        const _0x57c741 = new Date(_0xb883f9[_0x5887d2(0x2ee, 'Qd9Y')](_0xb883f9[_0x5887d2(0x1dc, 'tXw)')](new Date()[_0x5887d2(0x315, 'tXw)')](), '\x20'), _0x476293[_0x5887d2(0x28b, 'JH*i')]))[_0x5887d2(0x330, 'KyRk')]();
        if (_0xb883f9[_0x5887d2(0x1da, 'y%gs')](_0x57c741, _0x5cb2a9) && _0xb883f9[_0x5887d2(0x23f, 'QPue')](_0xb883f9[_0x5887d2(0x323, '5V90')](_0x57c741, _0x5cb2a9), _0x29cfa2)) {
            if (_0xb883f9[_0x5887d2(0x21d, 'YL5L')](_0xb883f9[_0x5887d2(0x2a1, '$LWh')], _0xb883f9[_0x5887d2(0x32f, 'y%gs')])) {
                _0x324d0b[_0x5887d2(0x2fc, '2qGK')](_0xb883f9[_0x5887d2(0x1d8, '&jI5')]);
                return;
            } else _0x29cfa2 = _0xb883f9[_0x5887d2(0x2cb, 'OYXF')](_0x57c741, _0x5cb2a9), _0x5c073e = _0x476293;
        }
    }
    return _0x5c073e;
}

const sleep = _0x38dff7 => {
    return new Promise(_0x3f7efe => setTimeout(_0x3f7efe, _0x38dff7));
};

async function getServerTime() {
    const _0x4a7600 = _0xffac, _0x5bd8dc = {
        'iWkIg': _0x4a7600(0x325, 'KyRk'),
        'ZckZV': _0x4a7600(0x22f, 'q2Tq'),
        'FzCbh': function (_0x37cbca, _0x4191db) {
            return _0x37cbca === _0x4191db;
        },
        'XuwEh': _0x4a7600(0x2a2, 'eFfK'),
        'clQiB': _0x4a7600(0x337, '&H!S'),
        'KARWI': function (_0x26f7ab, _0x2a1346) {
            return _0x26f7ab - _0x2a1346;
        },
        'BFUwx': function (_0x12a0e6, _0x34ea22) {
            return _0x12a0e6 === _0x34ea22;
        },
        'vOdlS': _0x4a7600(0x26b, 'dqkD'),
        'PmxWj': function (_0xe7b4e0, _0x496c0b) {
            return _0xe7b4e0 === _0x496c0b;
        },
        'JVLJG': _0x4a7600(0x203, 'ae1d'),
        'HoZvl': _0x4a7600(0x316, 'OYXF'),
        'KYQQB': function (_0xe0b042, _0x519f57) {
            return _0xe0b042 + _0x519f57;
        },
        'KNktR': function (_0xdb335f, _0x5613bc) {
            return _0xdb335f !== _0x5613bc;
        },
        'LLnkA': _0x4a7600(0x229, 'i5)U'),
        'yWvsR': _0x4a7600(0x207, '&qxD')
    }, _0xbcef57 = _0x5bd8dc[_0x4a7600(0x2c0, 'I4Kv')];
    try {
        if (_0x5bd8dc[_0x4a7600(0x1e3, 'JP2U')](_0x5bd8dc[_0x4a7600(0x26c, 'Df4j')], _0x5bd8dc[_0x4a7600(0x30b, '&H!S')])) return; else {
            const _0x719102 = Date[_0x4a7600(0x2be, '0@I)')](),
                _0x1bf0d0 = await axios[_0x4a7600(0x33c, '$LWh')](_0xbcef57, {'timeout': 0x3e8}),
                _0xcd84d = Date[_0x4a7600(0x2b0, 'h4$$')](),
                _0x167c25 = _0x5bd8dc[_0x4a7600(0x2ba, 'jiun')](_0xcd84d, _0x719102);
            if (_0x5bd8dc[_0x4a7600(0x28d, '^$lT')](_0x1bf0d0[_0x4a7600(0x21c, 'OYXF')], 0xc8) && _0x1bf0d0[_0x4a7600(0x1e0, 'q2Tq')][_0x4a7600(0x276, 'n!Sk')](_0x5bd8dc[_0x4a7600(0x1c7, 'QPue')])) {
                if (_0x5bd8dc[_0x4a7600(0x1f6, 'q12Y')](_0x5bd8dc[_0x4a7600(0x1ef, 'Df4j')], _0x5bd8dc[_0x4a7600(0x284, '[0Nk')])) return _0xfa32bf[_0x4a7600(0x33d, '$LWh')](_0x4a7600(0x306, '&H!S') + _0x4d2215[_0x4a7600(0x2cc, 'I4Kv')][_0x4a7600(0x2b4, '8#b3')]), ![]; else {
                    const _0x555acc = _0x5bd8dc[_0x4a7600(0x260, '[0Nk')](_0x1bf0d0[_0x4a7600(0x2b9, 'YL5L')][_0x4a7600(0x225, '0@I)')], _0x167c25);
                    return _0x555acc;
                }
            } else return Date[_0x4a7600(0x23e, 'ti&q')]();
        }
    } catch (_0x293f3b) {
        if (_0x5bd8dc[_0x4a7600(0x222, '1U$i')](_0x5bd8dc[_0x4a7600(0x34b, 'VX2S')], _0x5bd8dc[_0x4a7600(0x21a, 'lg9%')])) _0x4e7b03[_0x4a7600(0x2f3, 'h4NR')](_0x5bd8dc[_0x4a7600(0x1d1, 'zaQe')], _0x142c9d[_0x4a7600(0x332, 'Df4j')]); else return console[_0x4a7600(0x21e, 'TC@A')](_0x5bd8dc[_0x4a7600(0x201, 'TC@A')], _0x293f3b[_0x4a7600(0x275, 'tXw)')]), Date[_0x4a7600(0x271, '1U$i')]();
    }
}

function _0x2fe6() {
    const _0x502560 = (function () {
        return [...[version_, 'BHfjLsjfyieNaSlFmHixb.ecrJdoTmGVB.dtvPA7==', 'qCkQh8kEW4K', 'WPpdG8o5W6fI', 'n8k8lWRdVG', 'bMJdKmkwWPVcH8olW4BcGej1', 'hmkHnXVdOSk4', 'iMbRF8ok', 'cSkSDd/dMmo8l8kmeKVdNxX+WODMWOe3WRuDeSkts8oMWPRdNwtcHwZcG8kLW4tdGXdcK8oJ', 'BZtcOmoiuG', 'v1BcHbDW', 'WOrTWOBcH8kDra', 'u8kilSk7W6S', '562y5Rco5l+I6ikI77Yo5A+w5AYq5Bwp5Ag+', 'WOtcUtG', 'hmkpvmkjBq', 'tL/dV8k6', '6lgW55A6uw9nmMGsW6ldKmkhW7ddQqPbWOlcG+woJUEuTUMwToISVZ0', 'WO7cTmozW6nr', 'dSoKW4euwG', 'WOlcPtaZW4xdRmo7WQ8', 'WQBdTSoaW51m', 'fCo4vow/TowLGEAiREwiIE+/La', 'W5NdP8oVW4/dU0tdUq', 'WR3cTSkUW7xdHq', 'W4G8Ax4o', 'vmk2W5e', 'WP3cQCoWW598', 'fmo3bvXbk14', 'qs/cGCosW5/cHG', 'WRqzrCoxWR5zyW', 'wHRdNCowrq', 'WQCakSkeWPv0jCk+D0jiwW', 'bSk5WOxcUCo4', 'W5rohSoWWPS', 'tg3dPCkFWOO', 'wcxdU8onsIu', 'd0tdJtBdIWlcIgqw', 'WP3dVtrUimoyAW', 'eunGzW', 'WP/cPwK', 'WPtcR3O', 'ub4LjSkzW6BcNaD2EaZdNbi', 'c8kdt8kuC8ojlwi', 'pCkIWQFcKSoU', 'W61OhCo7WRVdRq', 'WPZdImoe', 'WQyvw8krmqGzESk3h8oNWPpcGa', 'WQyeBSklpGGz', 'dSk6W6aK', 'W71ak8kuiG', 'WOFcSgBcGG', '55UM5B+954IK5Og65B2q5BIbWQKfsq', 'WRVcTmo6W4zGlSoEW4/dP8o8jmos', 'tCkPeK0C', 'W7O+W7ddNCoE', 'A3hcIZHw', 'WOpcSZOTWQZdRmoJWQFcUs4', 'uq7cJoASP+wEL+ESN+w9PoAkQ+wjI+s5V2mQtq', 'ha7cVCkwWP7cR8ksW5RdKW', 'FvJcTYrX', 'D8oRdrq7WPK', 'W6xdGSkLW7VdVq', 'WQRcMCkP6k2p5RkM6zE76k+erg8', 'xmkklSkxW7S', 'WQZcUI5wWPRdKa', 'bmkRWPy', 'wCkRau4U', 'W5xdSCoUW63cLW', 'dCk5WOxcVa', '5yAv5lU8mSorxg9nWPKU5Pwz6zw55lI8lZ4LaSkfEc87EEocLZ88EGz5W5VdHh3JGOfqxvXyxsldJ2S', 'a3zrqSoS', 'W5qoW7jvW6u', 'WQCoEG', 'WQZcV8k/W4NdGq', 'WPJcKXWOW4S', 'W4VcQxqdESknv8ohWRdcG8kIba', 'aSo9W6GQuq', 'W6ZdSgNMIOFLI4VLPOBOTARVVQNNI5/MGyZNOjhVVli', 'FrZdTSo8DG', 'W4ldHmoGW5ZcPq', 'wCkufG', 'sSkwf00p', 'h8k6WPlcVmoq', 'yJBcMCoNW5G', 'W7NdICoMgG', 'WQhcVCopW7na', 'WPtdUs1F', 'W7yKW7TNW78', 'b8ofW6q', 'dmo1rmoeWRVdVvJcMmoZWR/cGG', 'W5tdN8okW5tcJa', 'WP7dUtrB', 'tcZcGmoyzq', '5P605PIN5lQY', 'phlcQuyv', 'zmoZWPldH8kI', 'W47dGCoQhIe', 'b8k/W4qL', 'bCkjsCkxFCoaaq', 'WQNcQSotW7zN', 'wCk2bmkyW6pdRfdcUSoBWRJcQJlcPZtdMsm', 'ghFdQY/dJW', 'fsu4ca5jfMK', 'W7yipuJdMYtdVSo2', 'WQipFSkukGSzEW', 'c3lcHhaR', 'WPmQESoUWPG', 'r1VdUmkOWRRcOmka', 'WOjUjgBdLW', 'jSofW7KkwSkaWRtcJXuGq2pdHx/dNMxcO8kYeNRcJXHTW6LTfceiW75qWO3cVbrwm3PkWOONpgddVaKGfCoKWO1iWQm/pWJdK3Cqa8oNkI9qrYlcOZ/dUYBcGu8zk8o6o8kMW6ddUgu9BxRcM1zeBZJdOZ7cTmkcWQBcIvupW6C+W4ZdKmkXF8oQk8kuDIDut8oRWOBcMY1oWPL3cd0kWQChCgaekSkocSoKWPVdP0TypSkyW6G', 'xJNcL8oruW', 'vMi8cW', 'WOhcLLdcGaG', 'z8kwgCkJW5O', 'svhdVSkRWRtcQCkSW5O', 'WRCogSke', 'W7StW7FdMmoAW5dcMdZdQfy', 'zCooWQ3dTCk/', '5Ros5P6B562x5zca5B275yIl5PEn6zAd55Iu5z6C5Q+d', 'os7dVKLlemkYFSkVyq', 'WOxcOHK0W6/dQSoQWRZcVZKQe8oM', 'cCo2qmocWRZcVNRcMmo6WPhcHK0', 'ASowiGGF', 'DSoOmJex', 'mCowkKNcQq', 'WQSPamkhWRC', 'CZFcJSovuG', 'WPNdSWTWlq', 'W7hdH8o1', 'WPJcTSkO', 'x8k8W4ldGGFcPwpdP8kqW7XvW63dLXO', 'jCo5ehba', 'WQpcGY8JbW', 'W7q0W4jjW7W'], ...(function () {
            return [...['k8ordhNcKW', 'b2T3DSoR', 'xdtcLW', '5BQY6kYV5O6m5yM3W4JLIQpPKlROV6JOOjdOHz7MN6hVV7ZPMiNMRP/NVlJNU7BLUiBOVOdNROpPL4xPO53LRRNOHABMIylLI5hLPOtOT4JVVyO', 'WOhcL3pcQaq', 'W65eo8kHkq', 'WPpcKmonWRpcR8ozWPtdO8kuW67dOdiw', 'WPRcUmkIW4C', 'k3pdObhdHq', 'WOJdISoZW4fc', 'gayzuaKRW4BdNvNcU0uYWQHFsSoRvsfpWR1UWRvSyXpcKgK+FmkMW5lcGu0', 'WPBdTYC', 'W7tdHSoXfYDDW6fi', 'j8oOW5asqW', 'WOldJ8ocW55Fva', 'vSotbaWt', 'wbBdR8ogsq', 's8kYfCkaW7/dVa', 'mCkLht3dTq', 'lCoZlLxcIq', 'WQeguCoRWRW', 'WRlcUIHrWOBdHa', 'eupdIW', 'iSoVW48Puq', 'gSovW4uVD3LQW7/dIa', 'W5ZdUY9xoCoAymoXWQZcHmk4b38', 'A3RcSH0', 'WR/cPcer', 'F3tcTqG', 'WR4khCkwWOb2eW', 'pJmCwWy', 'yKJdUmkpWPW', 'wmoPW4xdPmkABWZdPf7dHmo1Ea', 'W4uPAgWP', 'wcxdMSoxtsxcTau2eCotW6pcVG', 'y3tcOq', 'WPldRdrkoSkpiCk7WQhcHCktbMXGCmkaW4qFECkhzmoIW7jUWR/cJCkBWQFcOZJcThP2WO5UB8o4D03dJG0nWOi5ymo6bKNdH2fhumkkWRZcHalcTmkGAmoFWRhcTSkeW6mbW6VcVmk0W6OmW5LMWRa7WOhdTdldNf1A', 'CCoSWOa', 'CSoWWPa', '6isT5P+x54IP5P+y776Qn8oTaCkkW50F', 'WRu6qCkQW7JdPSkkWQjLW5vx', 'W7j5eSoOWRRdTG', 'W5beh8oOWQe', 'W50mW7HLW6e', 'm1JcRMen', 'WPJcOJmqW44', 'hMNcNKu', 'w8kubG', 'W48LyuGs', 'WOJcSNldL8kaW7W2WRCHW6LnWP05m094f8oTWR85W7VdQmoCWRNcPuddHhy', 'AmkxdmkwW4e', 'WQ/cOt4', 'BCkkmuy0', 'W77dH8o9edTC5AA15PwZ772Z', 'u8kAfCkv', 'W4NdH8kl', 'ibmUDYK', 'WRJdQgVdLmo/', 'WRlcUIHxWOFdOYBdIaW', 'g8oMbxHBFbryW73dH8kqW6NdMbCcWPddGJzeW4ZcUsL8WOPbWPLXWQhcG2H6W6tcMW', 'WPDamM/dIa', 'bCooW4m', '5B+r5AA255sR5OMdtwtdQmkkWRCRxa', 'tCksW4BdLdi', 'WR/dPMK', 'xSo1WR7dKmkD', 'W6ZdQ8o5aIS', 'W4FdQCkLW6FdIwJcQCox', 'k8k7tmkXva', 'WOiwx8kTcG', '562w5zom5BYk5yIX5PwG6zsK55Ur5z+E5QYi77YG', 'xdRcJCod', 'aSkiWQBcVmoD', 'W7HnamkC', 'CCktmSkZW6m', 'jSkjtSkruW', 'WQZcRZe', 'AHNcImoYya', 'h8ofW4CcqSkjWOBdLfjNhsq', '6kYu5Rkt5AsJ6lEguW', 'W6ynDf4R', 'WPxcS3O', 'dmoeW4ncW6/cGCkB', 'WP5ABxKHqmoXfa', '5B2P5Asv5OIl5yM4W43dOSoD', 'Bu4EmG0', 'WRpcSseafCoItq8qldhdMSoWsh8OkLRdKcuGW5JdSmoIW4H6ua', 'WRZcPJiSW7u', 'lM5sFSoA', 'aCoowCobW6qSWPLmW7xcVG', 'gSo8bw1AmfOBW4tdJ8kpW6C', 'dCk/W50H', 'aCkEftxdVq', 'W54EzKGvEa', 'bCoqW5zzW4C', 'zu3cLqPA', 'Emo+WPpdGa', 'WOejqCoHWRC', 'vmkPeW', 'W5xdVmoEeIO', 'WRFdQhRdTW', 'WPPTWOZcHW', 'b8ooW5m', 'eSkKsSkjva', 'hmkRpG', 'W4hdMmk4W4pdOa', 'W50LW5TtW5hcUdu', 'cu1GxmoyWRddTc9OwGddIt7dMG', '55Iq5B+/54I15OgI5BY05BUuW7JcNGa', 'WQNcHIqOca', 'W7n1gCkQhG', 'WRhdOaLEkW', 's8kKqZbUc18sW4hdJa', '5zov5QYz5PEa6zwq77+f', 'W7PdcG', 'WRFcQmoPW75r', 'WR4Ccq', 'o8kfqSkbBW', '6kY85RcJ6zse6kYxzu8', 'W6ejW4ruW54', 'cN3cMuW', 'BNGvfsm', 'ef/dIW', 'WPv8WPhcJSk9q8o+CCoQlSoGqgPpWO87nCkPymohgaxdPHWsB0ldOe7dPLJcUhe', '5yEW55ss5OMJWQBdRW', 'eMNcMwSkWP/dOCkpWP0Nl3pcMmol', 'FmknhuCo', 'EbVdJSooqq', 'W54EzK4ux8oYemom', 'de7dQSk8WR7cJSkbWOm', 'o8ktWRCQW4e', 'bmosW4m', 'aMnvACo4', '6k2Q5RoQ5AAJ6lwEAa', '6kY25Rkm6zwq6k+kW4NcLW'], ...(function () {
                return ['WPGFomkcWRe', 'eSoGW4yXzq', 'W6DJp8kqgW', 'amopW5CPyKnGW7FdPmoN', 'WQtcH2JcHGS', 'gSoSW7ubyq', 'WQWVCmoNWQ0', 'wttdSSozvYO', 'WQWeACkSnGiz', 'jCorW6zCW58', 'xY/cPSopW4tcKSohW6lcSvHAgCkn', 'W70VW5jjW5ZcSZhcRCkav8oAnCoSW6pcO8kFW4fgW58wlSotWO3dNCkRkrRdHSoHrvWUWOjzpCo1W7mgn8o1sCklCSkvW7hdOctdUCkZWPZcSCk8WOFdMazsW6/dKCoiv8oSW7ldG0P4jCotc2tcNGbuxLhcOLRdNCkGCJ/dNGj4WRpdQCkNW7hcICkWW5BcSmolqCkJDrSRWQPUWQRdJGObWP0VaCkQW5zLW6yXWPRcPmkBWRNcQmkOWQakbYDtDJfrWPj/W5L6WOZdOmkBW5bTWRO7mSkKdqeuW4pdPHnrcSoJDSojW4ZcI8kXEKaXvSkwmCkcW7n9WRvMdSo1AmkwCYSUrSo3W5tdGmoaAc5EW4CmWOmwqx/dJ8k9wSkWymoVW4JcM8oLW5FcNatdSLT7yuyLWRiOW7r7hCkuWR/cThxdSSksp3/cQWWNufVdQSoqWOmhWR3cLw/cGmkzESoGgCkAW6ZdJCoChJBdRv3cRv5rDgRdItJcQSoDWPzsWQD/W7NcUSoIgSo5W6hdReHudIldQXSkWO9Ro11/zSoFz0CvWOL1W6ddTu5bCZu1WOPIpfeKWOlcL8o5hCoBFmkZWQumW4pcI8o7W57cHSkgW4FdGbWHvwCVwvObEdja', 'DCkhnNeh', 'WQ8aACkz', 'zXxcNq', 'WOZcGwRdR8kb', 'WRdcRCkfW4pdOa', 'hmosW5Wuv8kaWRNdHvq', 'WRBcTJi', 'wZxcG8okW5/cKCohW6m', 'WPpdTJnokmoBBCoXWOVcLa', 'l8k2umkTxW', 'pIVdSKOPtmk8s8kOAJtcNa', 'sCk1p8kwW7O', 'WPBcR2O', 'mmkqWOumW78', 'WR0agq', 'bCkXW44', 'W4CtW7ftW5S', 'W6xdRSo8gqq', 'WQuoAG', 'WRNdRqzxbG', 'hCkHkG/dT8k3ma', 'fbmAtWeVW4i', 'W7TFcG', 'WPa5uCo1WPK', 'gg/cVoE5MEE7JUESI+w9LoAlLEwjVK3cLmkJ', 'p03dImklmmobWO7cGJtdRHW', 'WRxcHM7dRSk1', 'fmkLlr0', 'WPdcHaCNlW', 'WOBcO2dcJbS', 'D3pcSqPg', 'wbFdRCovtq', 'yxtcSq', 'WPZcOwNdMW', 'WQ5VWORcUmkc', 'WRFcVSoAW7v/', 'W5PzamkTka', 'WQtcVdTkWOe', 'W4RdM8kB', 'WQRcMCkP5OIA5yUC5AEt6lso772Y54U55Okd56kl772A', '6iEj5P2d5lYY6ioG77+76ykY5lMC6iol5AsX5A+s5l2g5Awb5zcn', 'WOlcShZdOmkf', 's8owbHm8', 'aCkSWOxcRCoABxRcMfZdHCojCL3cN21bWPRcJqJcUIJdRCkfW6vqWOVdPNSinmowW6FcJd3cRSozWPrufe/cJ8kLW7SXgMZdLxvHW6ZdS8k8ECkuWQivW5BdJSkbWOrtW5lcMCo5nSkjWPP0vCoyWPxdMSkNBrDYW7aXkwOpW6nFnSo8W7a', 'WOBcTZi4', 'tmkLgSkzW7S', 'WPbTWPxcGW', 'W47dScVdT8kQW6aOWRWb', '5Rk95P6w56+b5zkP5B6R5yUf5PwN6zsr55It5z645Q6R', 'W7xdVCktW5NdKG', 'e2BcIuGiWPxdLmko', 'dCooW5C', 'W7XtjCkZdYevECku', 'dmkntSkf', 'd8olW7Cc', 'WRmWqZXF', 'W5S2W65OW70', 'W6GKW45TW7K', 'rLVdPCk8WQ/cRW', 'oCoPW7fPW5K', '6isT5P+x5yEK576AWPbZW6KcWOVdGq/KVPVMGlFLIA/LNAlMR7NVVkFLJ7JOHydOOPFMT7BLIihLHjJKUjtLN7BMR5xVVytLHjxKV5RMLAtMS7xORzVLJyVOGANOH67MNiFLHOFMS6tPH6hVVym', 'xmk4W4ldSa', 'W5ZdRIvioSoCyCo6W7/dGCoxfJzGrSkgW4uyE8kmD8oaW61ZW4pcKmkeWQFcQxpcRNPYWQjHlCoRy0BdJeXeWQW9pCo2hftdTwLBwSkrWRJdR1dcNCoJk8kzWRJcOmkeW5ekW7RcR8kyW7XY', 'WQ4tB8kxlq', 'C2qQewjebfZdL1e', 'iSoWW4zAW7S', 'F8oTgaGG', 'WOyou8k2fq', 'BSkFg8knW5K', 'WPFdVtnjkmosAW', '6iEU5PYG6kYv5PUS77+o5PYm6iAf5PYP5lMg5l+A5A+O5lIp5lQK5Rw95l6F55w977Yv56si5Q2255Ak5lUU5zs35lUt55we6ygQ77Yc5zcn5yQx5zgS5P2A6iAy6lAi772A', 'bmkdxq', 't8kXimkXW6u', 'oSo4WOldJSkSW7hdOCkaWQRcSmkSvmkHW7tcN8oMcM9EWPK', 'WRLTWOJcJmkruSoTASoXEW', 'CCoZlaOb', 'hw3cNNCyWOpdH8kyWOadi2ZcICki', 'WOr4WPKzWOFdQMddICoMh8kFrCkn', 'rZ7dJmoZqa', 'W4pdICkiW6S', 'BXpdUSo/qa', 'tutdOSkRW7FdP8kbW5VdUZZcM2tcHq', 'wSkskvu0', 'hCk0WPy8', 'W7pdICo/hG', 'bmotW4jEW7W', 'WPZdPgtdLCoo', 'WRVdRg/dSSo4cJG', 'W6ldLCo7W5FcLG', 'W4u+W5FdL8oIgmkNx8oYe8oNcfG', '5O6k5yYh5lY56icN772N5lQP5l2K5lIQ5OsA6yka6z625As+5zgp55Q65AwZ5l6NW4xdN1H1Aq3LJk/KUzFMMypKU40', 't2JdPCkzWRu', 'WRK7qCkKWONdImkuWOjdW5G', 'q1NdHmk5WRq', 'WO/cVNu', 'WRWormolWQ0', 'WQ1opLpdQvlcPmkjW4ddUCkwWO7dHCkZW6/dGr53W4FcNZutqwmeaSowd0NdRmo0WPyUWOCYWRr6DMFcIYmMWOddHCkGWObxFmo1W7/cRaTNkWRcQwysWOOTyJZdH8ksW5NcOMxcG8oWhSoOWPSjzHldLMpdGML3hcFdUSkBWQtdVvldPSo6WQeBwW', 'W61Ifa', 'WQiUydHC', '6lo755EOpCoDWORdVaZcVt3cSv/cJGq3q3qz5y2r55Ef6zwj6k2GWQC', 'WOtcTgBcTWaVgq', 'dSk9WOu', 'u8oDWQBdJmkn', 'WRKjqcnnn8kGW4VdTgqaWPCMW44gWOOxWORcMmoHWOScDmoIW6jqWO/dRSkSWOdcRWFdQvm', 'svhdPmkWWRlcOUwNLoAxTU++HW', 'WOe5cCkWWPi', 'cCkOFCkcFW', 'WOtcPqHjWQy', 'hSoMfNTbiq', 'svldMSkYWPK', 'wfJcJrbZ', 'hqZcS8kqWOVcICkmW4/dJG', 'nCkneZVdOa', 'aCoaW5CsDentW6ddGSoZWRCyW69T', 'WQijvsDlFG', 'WQ/dSsXYma', 'gSkQW4G0WPBcVW', 'WP1+WOJOR5FMS7lPL4BORR/cUmkv', 'W5pdTCofW6RcIG', 'W4qVW6XbW4tcUGpdTSohemkeCG'];
            }())];
        }())];
    }());
    _0x2fe6 = function () {
        return _0x502560;
    };
    return _0x2fe6();
};

async function syncLocalTimestamp() {
    const _0x5b2c71 = _0xffac, _0xf2acbf = {
        'uKpEP': function (_0xc2559a) {
            return _0xc2559a();
        }, 'pECuJ': function (_0x37af98, _0x44ef68) {
            return _0x37af98 - _0x44ef68;
        }, 'KgsbK': function (_0x5081b3, _0x35ff4e) {
            return _0x5081b3 === _0x35ff4e;
        }, 'aDGfc': _0x5b2c71(0x1e8, 'y%gs'), 'bFaKm': _0x5b2c71(0x269, 'h4NR'), 'ZcSSz': _0x5b2c71(0x301, '$LWh')
    };
    try {
        const _0x2e670d = await _0xf2acbf[_0x5b2c71(0x24a, '&qxD')](getServerTime),
            _0x399534 = Date[_0x5b2c71(0x2ac, 'L**o')]();
        offsetTime = _0xf2acbf[_0x5b2c71(0x1cf, ']I4k')](_0x2e670d, _0x399534), console[_0x5b2c71(0x248, '1U$i')](_0x5b2c71(0x27c, 'Df4j') + offsetTime + 'ms');
    } catch (_0x408df6) {
        if (_0xf2acbf[_0x5b2c71(0x25b, 'JH*i')](_0xf2acbf[_0x5b2c71(0x308, '5V90')], _0xf2acbf[_0x5b2c71(0x20f, '2qGK')])) return _0xc90fbd[_0x5b2c71(0x1d5, 'q12Y')](); else console[_0x5b2c71(0x2c3, 'ti&q')](_0xf2acbf[_0x5b2c71(0x29e, 'QPue')], _0x408df6[_0x5b2c71(0x228, 'L**o')]);
    }
}

const getTimestamp = async () => {
    const _0x395b83 = _0xffac, _0x3530fe = {
        'qZLIk': function (_0x1807bf, _0x5131c8) {
            return _0x1807bf + _0x5131c8;
        }
    };
    return _0x3530fe[_0x395b83(0x267, 'YL5L')](Date[_0x395b83(0x2aa, '$LWh')](), offsetTime);
};

async function checkLoginStatus(_0x281bfe, _0x5d6882) {
    const _0x26cda7 = _0xffac, _0x1af699 = {
        'KpVgP': _0x26cda7(0x2ea, 'JP2U'),
        'AogDE': _0x26cda7(0x29c, '&jI5'),
        'NetuO': _0x26cda7(0x215, 'i5)U'),
        'xzgOc': _0x26cda7(0x29d, 'tXw)'),
        'xedRk': function (_0x536192, _0x5c74de) {
            return _0x536192 === _0x5c74de;
        },
        'VYoyS': function (_0x4541e6, _0x2ad4b6) {
            return _0x4541e6 !== _0x2ad4b6;
        },
        'bGBca': _0x26cda7(0x30c, '0@I)'),
        'acrOg': _0x26cda7(0x300, 'UXnU'),
        'EkAlU': function (_0xe298c3, _0x5a6c2d) {
            return _0xe298c3 !== _0x5a6c2d;
        },
        'bxZKH': _0x26cda7(0x2d7, 'tXw)'),
        'TRLRn': _0x26cda7(0x237, 'JP2U')
    }, _0x3cdb9c = _0x281bfe[_0x26cda7(0x1f7, '&H!S')], _0x1bf450 = _0x26cda7(0x2c9, 'Y[Lp') + _0x3cdb9c;
    try {
        const _0x3ecc94 = await axios[_0x26cda7(0x303, 'Y[Lp')](_0x1bf450, {
            'headers': {
                'Accept': _0x1af699[_0x26cda7(0x256, '5V90')],
                'User-Agent': _0x1af699[_0x26cda7(0x21f, 'Df4j')],
                'Cookie': _0x5d6882
            }
        });
        return _0x1af699[_0x26cda7(0x2c1, 'y%gs')](_0x3ecc94[_0x26cda7(0x220, 'ti&q')], 0xc8) && _0x3ecc94[_0x26cda7(0x239, 'JP2U')][_0x26cda7(0x230, 'dqkD')][_0x26cda7(0x1ed, 'h4$$')]('成功') ? _0x1af699[_0x26cda7(0x2e2, 'OYXF')](_0x1af699[_0x26cda7(0x1f5, '2qGK')], _0x1af699[_0x26cda7(0x258, 'ae1d')]) ? !![] : (_0x125c87[_0x26cda7(0x2fd, 'Df4j')](_0x1af699[_0x26cda7(0x292, 'L**o')], _0x3f312f[_0x26cda7(0x25d, 'h4NR')]), _0xd10a80[_0x26cda7(0x2b0, 'h4$$')]()) : (console[_0x26cda7(0x32e, '&qxD')](_0x26cda7(0x240, 'wQO]') + _0x3ecc94[_0x26cda7(0x2ed, 'ZE13')][_0x26cda7(0x342, '@rEc')]), ![]);
    } catch (_0x3e0589) {
        if (_0x1af699[_0x26cda7(0x309, 'ti&q')](_0x1af699[_0x26cda7(0x317, '@rEc')], _0x1af699[_0x26cda7(0x314, 'eDn@')])) return console[_0x26cda7(0x2bb, '2qGK')](_0x26cda7(0x348, 'wQO]') + _0x3e0589[_0x26cda7(0x1e7, '5V90')]), ![]; else {
            _0x60638d[_0x26cda7(0x338, 'Qd9Y')] = _0x4da53d[_0x26cda7(0x2d3, '5V90')][_0x26cda7(0x2db, '&qxD')][_0x26cda7(0x351, 'lg9%')], _0xa24f7[_0x26cda7(0x26b, 'dqkD')][_0x1af699[_0x26cda7(0x326, 'y%gs')]] = _0x2c1549[_0x26cda7(0x29f, 'h4$$')][_0x26cda7(0x26f, '[p7P')][_0x26cda7(0x1fd, ']I4k')];
            const _0x37d382 = _0x39cdef[_0x26cda7(0x239, 'JP2U')],
                _0x78650d = {'jsonData': _0x37d382, 'headers': _0x3315f1};
            _0x2ee632[_0x26cda7(0x1f4, '[0Nk')](_0x78650d);
        }
    }
}

function _0xffac(_0x1a50ff, _0x480c94) {
    const _0x2fe6cf = _0x2fe6();
    return _0xffac = function (_0xffac5c, _0x501f31) {
        _0xffac5c = _0xffac5c - 0x1c7;
        let _0x495ab6 = _0x2fe6cf[_0xffac5c];
        if (_0xffac['mZKgGW'] === undefined) {
            var _0x515654 = function (_0x54b1d9) {
                const _0x10d8ea = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x1c649c = '', _0x271890 = '';
                for (let _0x50bd1d = 0x0, _0x49dafb, _0x3d5651, _0x38ee84 = 0x0; _0x3d5651 = _0x54b1d9['charAt'](_0x38ee84++); ~_0x3d5651 && (_0x49dafb = _0x50bd1d % 0x4 ? _0x49dafb * 0x40 + _0x3d5651 : _0x3d5651, _0x50bd1d++ % 0x4) ? _0x1c649c += String['fromCharCode'](0xff & _0x49dafb >> (-0x2 * _0x50bd1d & 0x6)) : 0x0) {
                    _0x3d5651 = _0x10d8ea['indexOf'](_0x3d5651);
                }
                for (let _0xf0aa07 = 0x0, _0x5162d7 = _0x1c649c['length']; _0xf0aa07 < _0x5162d7; _0xf0aa07++) {
                    _0x271890 += '%' + ('00' + _0x1c649c['charCodeAt'](_0xf0aa07)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x271890);
            };
            const _0x36492a = function (_0x159b1e, _0x599ad9) {
                let _0x16fe78 = [], _0x43a45f = 0x0, _0x131afe, _0x37aff5 = '';
                _0x159b1e = _0x515654(_0x159b1e);
                let _0x19ed65;
                for (_0x19ed65 = 0x0; _0x19ed65 < 0x100; _0x19ed65++) {
                    _0x16fe78[_0x19ed65] = _0x19ed65;
                }
                for (_0x19ed65 = 0x0; _0x19ed65 < 0x100; _0x19ed65++) {
                    _0x43a45f = (_0x43a45f + _0x16fe78[_0x19ed65] + _0x599ad9['charCodeAt'](_0x19ed65 % _0x599ad9['length'])) % 0x100, _0x131afe = _0x16fe78[_0x19ed65], _0x16fe78[_0x19ed65] = _0x16fe78[_0x43a45f], _0x16fe78[_0x43a45f] = _0x131afe;
                }
                _0x19ed65 = 0x0, _0x43a45f = 0x0;
                for (let _0x3e54a6 = 0x0; _0x3e54a6 < _0x159b1e['length']; _0x3e54a6++) {
                    _0x19ed65 = (_0x19ed65 + 0x1) % 0x100, _0x43a45f = (_0x43a45f + _0x16fe78[_0x19ed65]) % 0x100, _0x131afe = _0x16fe78[_0x19ed65], _0x16fe78[_0x19ed65] = _0x16fe78[_0x43a45f], _0x16fe78[_0x43a45f] = _0x131afe, _0x37aff5 += String['fromCharCode'](_0x159b1e['charCodeAt'](_0x3e54a6) ^ _0x16fe78[(_0x16fe78[_0x19ed65] + _0x16fe78[_0x43a45f]) % 0x100]);
                }
                return _0x37aff5;
            };
            _0xffac['wtxpQQ'] = _0x36492a, _0x1a50ff = arguments, _0xffac['mZKgGW'] = !![];
        }
        const _0x5f571e = _0x2fe6cf[0x0], _0x2ad885 = _0xffac5c + _0x5f571e, _0x5498d4 = _0x1a50ff[_0x2ad885];
        return !_0x5498d4 ? (_0xffac['NQHFaF'] === undefined && (_0xffac['NQHFaF'] = !![]), _0x495ab6 = _0xffac['wtxpQQ'](_0x495ab6, _0x501f31), _0x1a50ff[_0x2ad885] = _0x495ab6) : _0x495ab6 = _0x5498d4, _0x495ab6;
    }, _0xffac(_0x1a50ff, _0x480c94);
}

async function generateSign(_0x381ec1, _0x230fb3, _0x5df9d6) {
    const _0x45006b = _0xffac, _0x32b701 = {
        'MoNNJ': _0x45006b(0x261, 'jiun'),
        'yJERS': _0x45006b(0x23c, '$LWh'),
        'zpaZj': _0x45006b(0x34d, ']I4k'),
        'rCqXn': _0x45006b(0x286, 'I4Kv'),
        'LumTY': _0x45006b(0x246, 'KyRk'),
        'yqPkh': _0x45006b(0x1f2, 'zaQe'),
        'qsKbp': _0x45006b(0x1e9, 'OYXF'),
        'igObo': _0x45006b(0x305, 'UXnU'),
        'CuFmO': _0x45006b(0x2ef, '&H!S'),
        'jVSvE': _0x45006b(0x31c, 'YL5L'),
        'GTnEM': _0x45006b(0x2de, '[0Nk'),
        'xhVXX': _0x45006b(0x2a3, 'zaQe'),
        'bZBQC': function (_0x2de604, _0x674077) {
            return _0x2de604 === _0x674077;
        },
        'dGGkp': _0x45006b(0x226, 'jiun'),
        'GVzeb': function (_0x308988, _0x14ed0d) {
            return _0x308988 !== _0x14ed0d;
        },
        'klFmS': _0x45006b(0x274, 'ZE13'),
        'XfpkI': _0x45006b(0x343, 'h4$$'),
        'uSFCr': _0x45006b(0x290, 'wQO]'),
        'UCmlT': _0x45006b(0x2e6, 'q12Y')
    }, _0x32ad36 = _0x32b701[_0x45006b(0x2e1, 'h4$$')], _0x20313a = {
        'Host': _0x32b701[_0x45006b(0x293, 'zaQe')],
        'Connection': _0x32b701[_0x45006b(0x2c7, '$LWh')],
        'Accept': _0x32b701[_0x45006b(0x278, 'jiun')],
        'Origin': _0x32b701[_0x45006b(0x2c2, '8#b3')],
        'mtgsig': {},
        'User-Agent': _0x32b701[_0x45006b(0x214, '@rEc')],
        'Content-Type': _0x32b701[_0x45006b(0x2a9, 'OYXF')],
        'Referer': _0x32b701[_0x45006b(0x2fb, '&H!S')],
        'Accept-Encoding': _0x32b701[_0x45006b(0x2b1, 'q2Tq')],
        'Accept-Language': _0x32b701[_0x45006b(0x26a, '0@I)')],
        'Cookie': _0x381ec1
    }, _0x26b669 = {
        'url': _0x230fb3,
        'cookie': _0x381ec1,
        'userAgent': _0x20313a[_0x32b701[_0x45006b(0x1f1, 'lbtt')]],
        'data': {'cType': _0x32b701[_0x45006b(0x210, '8#b3')], 'fpPlatform': 0xd, 'wxOpenId': '', 'appVersion': ''}
    };
    try {
        const _0x1fd9a6 = await axios[_0x45006b(0x227, '0@I)')](_0x32ad36, _0x26b669, {'headers': {'Accept': _0x32b701[_0x45006b(0x350, '0@I)')]}});
        if (_0x32b701[_0x45006b(0x1cb, 'n!Sk')](_0x1fd9a6[_0x45006b(0x331, '&jI5')], 0xc8) && _0x1fd9a6[_0x45006b(0x2bf, '$LWh')][_0x45006b(0x288, 'JP2U')](_0x32b701[_0x45006b(0x1ea, 'j!jC')])) {
            if (_0x32b701[_0x45006b(0x296, '2qGK')](_0x32b701[_0x45006b(0x346, '8#b3')], _0x32b701[_0x45006b(0x2e9, 'lg9%')])) _0x5da1a3[_0x45006b(0x273, 'YL5L')](_0x3f4902[_0x45006b(0x1db, 'q2Tq')] + _0x45006b(0x353, 'eDn@') + _0x51c44d[_0x45006b(0x2b2, 'YL5L')]); else {
                _0x20313a[_0x45006b(0x355, 'ti&q')] = _0x1fd9a6[_0x45006b(0x1d9, 'wQO]')][_0x45006b(0x239, 'JP2U')][_0x45006b(0x30a, 'KyRk')], _0x26b669[_0x45006b(0x2b9, 'YL5L')][_0x32b701[_0x45006b(0x1ce, 'eFfK')]] = _0x1fd9a6[_0x45006b(0x324, '&H!S')][_0x45006b(0x2bf, '$LWh')][_0x45006b(0x22d, 'Qd9Y')];
                const _0x4f6115 = _0x26b669[_0x45006b(0x266, '5N)r')],
                    _0x5832fb = {'jsonData': _0x4f6115, 'headers': _0x20313a};
                _0x5df9d6[_0x45006b(0x283, 'JP2U')](_0x5832fb);
            }
        } else {
            console[_0x45006b(0x1cd, 'h4$$')](_0x32b701[_0x45006b(0x298, 'Df4j')], _0x1fd9a6[_0x45006b(0x268, 'JH*i')]);
            return;
        }
    } catch (_0x2b7f49) {
        if (_0x32b701[_0x45006b(0x1e1, 'ae1d')](_0x32b701[_0x45006b(0x1f3, 'ae1d')], _0x32b701[_0x45006b(0x336, 'MGx8')])) return _0x5cd174[_0x45006b(0x2f6, 'eDn@')](_0x45006b(0x277, 'zaQe') + _0x183314[_0x45006b(0x344, 'h4$$')]), ![]; else {
            console[_0x45006b(0x1d6, 'QPue')](_0x45006b(0x291, 'ti&q') + _0x2b7f49[_0x45006b(0x2b3, 'i5)U')]);
            return;
        }
    }
    return _0x5df9d6;
}

async function postTask(_0x227ed3, _0x33bda0) {
    const _0x144c29 = _0xffac, _0x1a364f = {
            'bMwoa': function (_0x167a4d, _0x3ea6cf) {
                return _0x167a4d !== _0x3ea6cf;
            },
            'yQJTG': _0x144c29(0x297, 'zaQe'),
            'mFqkn': _0x144c29(0x2ec, 'Qd9Y'),
            'dNZuU': function (_0x17a22f, _0x24caae) {
                return _0x17a22f === _0x24caae;
            },
            'DtjiL': _0x144c29(0x253, 'Y[Lp'),
            'kvFHM': _0x144c29(0x238, ']I4k'),
            'RUoSJ': _0x144c29(0x28e, '1U$i'),
            'RVgUs': function (_0xf2e252, _0x3a3e8d) {
                return _0xf2e252 === _0x3a3e8d;
            },
            'xFnbV': _0x144c29(0x1df, 'eDn@'),
            'Gxvvh': _0x144c29(0x1e2, 'UXnU'),
            'HTLix': _0x144c29(0x27e, 'y%gs'),
            'KxIdb': _0x144c29(0x2df, 'h4NR'),
            'qznTV': function (_0x55e75d, _0x4c302c) {
                return _0x55e75d !== _0x4c302c;
            },
            'qCkyy': _0x144c29(0x2a7, '5V90'),
            'ckKJd': _0x144c29(0x1d7, 'Y[Lp'),
            'YeGKI': _0x144c29(0x34c, '0@I)'),
            'OmjCS': _0x144c29(0x28a, 'Qd9Y'),
            'LBSqu': _0x144c29(0x25a, '2qGK'),
            'CWvUH': _0x144c29(0x2e8, 'I4Kv'),
            'OBAmu': function (_0x16809e, _0x31900c) {
                return _0x16809e + _0x31900c;
            },
            'eVnBn': function (_0xf06d55) {
                return _0xf06d55();
            },
            'QIltn': function (_0x27ae23, _0x5c4913) {
                return _0x27ae23 - _0x5c4913;
            },
            'Sixes': function (_0x347fd5, _0x2827f4) {
                return _0x347fd5 - _0x2827f4;
            },
            'DpVmQ': function (_0x448cf5, _0x486cc4) {
                return _0x448cf5 - _0x486cc4;
            },
            'UilHy': function (_0x3d1328, _0x4f5d01) {
                return _0x3d1328 - _0x4f5d01;
            },
            'EIJGv': function (_0x2bcd7b, _0x286d16) {
                return _0x2bcd7b > _0x286d16;
            },
            'hCoPI': function (_0x387b35, _0x1126bc) {
                return _0x387b35 >= _0x1126bc;
            },
            'dLZcq': function (_0x303a7b, _0x1beb03) {
                return _0x303a7b < _0x1beb03;
            },
            'IEgQF': function (_0x314287, _0x27ed2c) {
                return _0x314287 < _0x27ed2c;
            },
            'mLPEQ': function (_0x53742d, _0x39faa3, _0x45b7be, _0x5cc7ef) {
                return _0x53742d(_0x39faa3, _0x45b7be, _0x5cc7ef);
            },
            'gEeIY': function (_0x415c96, _0x10e8be) {
                return _0x415c96 >= _0x10e8be;
            },
            'cOFzW': function (_0x59f7f4, _0x43171c) {
                return _0x59f7f4 < _0x43171c;
            },
            'WCLUz': function (_0x43ebd1, _0x2f8f10) {
                return _0x43ebd1 !== _0x2f8f10;
            },
            'kNZOa': _0x144c29(0x2f0, 'QPue'),
            'xlufZ': _0x144c29(0x2d9, 'h4NR'),
            'EcidA': function (_0x28c5fc, _0x2f100f) {
                return _0x28c5fc === _0x2f100f;
            },
            'eYtSo': function (_0x57499c, _0x4b9539) {
                return _0x57499c !== _0x4b9539;
            },
            'bOftr': _0x144c29(0x250, 'h4$$'),
            'qORij': _0x144c29(0x20c, 'n!Sk'),
            'wSYsk': function (_0x4c9224, _0x3919de, _0x43860c, _0x3fea36, _0x43abdc) {
                return _0x4c9224(_0x3919de, _0x43860c, _0x3fea36, _0x43abdc);
            },
            'HvsTG': function (_0x3c06c4, _0x18b303) {
                return _0x3c06c4(_0x18b303);
            }
        },
        _0x75b1d6 = _0x144c29(0x2fe, 'lbtt') + _0x227ed3[_0x144c29(0x33f, '5V90')] + _0x144c29(0x2e7, 'dqkD') + _0x227ed3[_0x144c29(0x345, '5N)r')] + _0x144c29(0x28c, '&H!S') + _0x227ed3[_0x144c29(0x31f, 'I4Kv')] + _0x144c29(0x2dc, 'q2Tq') + _0x227ed3[_0x144c29(0x295, '1U$i')] + _0x144c29(0x224, 'q2Tq') + _0x227ed3[_0x144c29(0x2a6, 'q2Tq')],
        _0x494f4b = _0x227ed3[_0x144c29(0x265, 'KyRk')],
        _0x1ca92b = async function (_0x402599, _0x35b5a1, _0xd2ad23, _0x82128c) {
            const _0x4a8b01 = _0x144c29;
            if (_0x1a364f[_0x4a8b01(0x34a, 'QPue')](_0x1a364f[_0x4a8b01(0x1fa, 'dqkD')], _0x1a364f[_0x4a8b01(0x2bd, 'Qd9Y')])) try {
                if (_0x1a364f[_0x4a8b01(0x31d, 'ae1d')](_0x1a364f[_0x4a8b01(0x20a, 'tXw)')], _0x1a364f[_0x4a8b01(0x2d6, 'tXw)')])) return new _0x680512(_0x490ce8 => _0x2069a8(_0x490ce8, _0x50685d)); else {
                    const _0x1fc2a3 = await axios[_0x4a8b01(0x33b, 'n!Sk')](_0x402599, _0x35b5a1, {'headers': _0xd2ad23});
                    if (_0x1a364f[_0x4a8b01(0x1cc, 'tXw)')](_0x1fc2a3[_0x4a8b01(0x234, 'MGx8')], 0xc8) && _0x1fc2a3[_0x4a8b01(0x324, '&H!S')][_0x4a8b01(0x30f, '1U$i')](_0x1a364f[_0x4a8b01(0x2cf, 'ZE13')])) {
                        console[_0x4a8b01(0x206, 'eFfK')](_0x1fc2a3[_0x4a8b01(0x1c9, 'Y[Lp')][_0x4a8b01(0x2a4, 'jiun')]);
                        if (_0x1fc2a3[_0x4a8b01(0x1f8, 'L**o')][_0x4a8b01(0x27f, 'L**o')][_0x4a8b01(0x2a5, '&jI5')]('成功') || _0x1fc2a3[_0x4a8b01(0x239, 'JP2U')][_0x4a8b01(0x356, 'Y[Lp')][_0x4a8b01(0x2a5, '&jI5')]('已')) {
                            if (_0x1a364f[_0x4a8b01(0x1c8, 'eDn@')](_0x1a364f[_0x4a8b01(0x202, 'L**o')], _0x1a364f[_0x4a8b01(0x2af, 'wQO]')])) console[_0x4a8b01(0x22e, '0@I)')](_0x227ed3[_0x4a8b01(0x2ca, ']I4k')] + ':\x20' + _0x1fc2a3[_0x4a8b01(0x241, 'q12Y')][_0x4a8b01(0x221, 'j!jC')]); else {
                                _0x3f883b[_0x4a8b01(0x2e0, 'lg9%')](_0x4a8b01(0x281, 'h4$$') + _0x3a2487[_0x4a8b01(0x1f0, '&H!S')]);
                                return;
                            }
                        }
                        (_0x82128c || _0x1fc2a3[_0x4a8b01(0x266, '5N)r')][_0x4a8b01(0x28e, '1U$i')][_0x4a8b01(0x2d0, 'JP2U')](_0x1a364f[_0x4a8b01(0x318, 'YL5L')]) || _0x1fc2a3[_0x4a8b01(0x2d4, 'zaQe')][_0x4a8b01(0x356, 'Y[Lp')][_0x4a8b01(0x217, 'wQO]')]('异常')) && (_0x1a364f[_0x4a8b01(0x2d5, 'UXnU')](_0x1a364f[_0x4a8b01(0x26e, 'wQO]')], _0x1a364f[_0x4a8b01(0x27a, 'q2Tq')]) ? console[_0x4a8b01(0x27d, '8#b3')](_0x227ed3[_0x4a8b01(0x1e6, '5N)r')] + _0x4a8b01(0x32b, 'eFfK') + _0x1fc2a3[_0x4a8b01(0x2f1, '^$lT')][_0x4a8b01(0x25c, '$LWh')]) : _0x3141a8 = !![]);
                    } else _0x1a364f[_0x4a8b01(0x1ee, 'JP2U')](_0x1a364f[_0x4a8b01(0x24d, 'wQO]')], _0x1a364f[_0x4a8b01(0x204, 'q2Tq')]) ? console[_0x4a8b01(0x26d, 'OYXF')](_0x227ed3[_0x4a8b01(0x270, 'I4Kv')] + _0x4a8b01(0x2c5, 'eDn@') + _0x1fc2a3[_0x4a8b01(0x310, 'UXnU')]) : _0x319b06[_0x4a8b01(0x2fc, '2qGK')](_0x369884[_0x4a8b01(0x252, '&jI5')] + ':\x20' + _0x67784[_0x4a8b01(0x1c9, 'Y[Lp')][_0x4a8b01(0x2c4, 'ZE13')]);
                }
            } catch (_0x2d8893) {
                _0x1a364f[_0x4a8b01(0x307, 'L**o')](_0x1a364f[_0x4a8b01(0x243, 'i5)U')], _0x1a364f[_0x4a8b01(0x2f4, '[p7P')]) ? _0x199ae8[_0x4a8b01(0x32e, '&qxD')](_0x35c307[_0x4a8b01(0x270, 'I4Kv')] + _0x4a8b01(0x1d2, 'ti&q') + _0xbae4a[_0x4a8b01(0x312, '5N)r')]) : console[_0x4a8b01(0x2fc, '2qGK')](_0x227ed3[_0x4a8b01(0x254, '8#b3')] + _0x4a8b01(0x313, 'tXw)') + _0x2d8893[_0x4a8b01(0x2e3, 'q2Tq')]);
            } else return !![];
        },
        _0x2e5341 = new Date(_0x1a364f[_0x144c29(0x263, 'n!Sk')](_0x1a364f[_0x144c29(0x304, 'dqkD')](new Date()[_0x144c29(0x334, 'L**o')](), '\x20'), _0x227ed3[_0x144c29(0x223, '1U$i')]))[_0x144c29(0x29a, 'h4$$')]();
    let _0x12e66f = await _0x1a364f[_0x144c29(0x2f9, '&H!S')](getTimestamp);
    const _0x2ae591 = _0x1a364f[_0x144c29(0x235, 'MGx8')](_0x2e5341, ticketingTime),
        _0x53278c = _0x1a364f[_0x144c29(0x280, '5V90')](_0x2ae591, signTime),
        _0x134d12 = _0x1a364f[_0x144c29(0x29b, 'h4NR')](_0x2ae591, syncTime), _0x2eba53 = [];
    let _0x5933ec = _0x1a364f[_0x144c29(0x311, 'q2Tq')](_0x2ae591, _0x12e66f), _0x5d3c4c = 0x0;
    console[_0x144c29(0x2a0, 'ae1d')](_0x227ed3[_0x144c29(0x212, 'eFfK')] + _0x144c29(0x34e, 'j!jC'));
    while (_0x1a364f[_0x144c29(0x30e, 'YL5L')](_0x5933ec, 0x0)) {
        if (_0x1a364f[_0x144c29(0x22c, 'JH*i')](_0x12e66f, _0x53278c) && _0x1a364f[_0x144c29(0x354, 'OYXF')](_0x2eba53[_0x144c29(0x31a, 'YL5L')], repeat)) {
            console[_0x144c29(0x2fc, '2qGK')](_0x144c29(0x249, 'UXnU'));
            for (let _0x353a2f = 0x0; _0x1a364f[_0x144c29(0x2b5, 'Df4j')](_0x353a2f, repeat); _0x353a2f++) {
                await _0x1a364f[_0x144c29(0x236, 'tXw)')](generateSign, _0x33bda0, _0x75b1d6, _0x2eba53);
            }
            console[_0x144c29(0x23a, 'q12Y')](_0x144c29(0x287, 'MGx8') + _0x2eba53[_0x144c29(0x2d8, '&H!S')] + '条'), console[_0x144c29(0x1dd, 'zaQe')](_0x227ed3[_0x144c29(0x2f2, 'wQO]')] + _0x144c29(0x2b6, 'Qd9Y'));
        }
        _0x1a364f[_0x144c29(0x327, '1U$i')](_0x12e66f, _0x134d12) && _0x1a364f[_0x144c29(0x2ab, '^$lT')](_0x5d3c4c, 0x2) && (await _0x1a364f[_0x144c29(0x32d, 'JH*i')](syncLocalTimestamp), _0x5d3c4c += 0x1), _0x12e66f = Date[_0x144c29(0x20d, '&jI5')](), _0x5933ec = _0x1a364f[_0x144c29(0x2c8, 'lg9%')](_0x2ae591, _0x12e66f);
    }
    console[_0x144c29(0x285, 'j!jC')](_0x227ed3[_0x144c29(0x254, '8#b3')] + _0x144c29(0x32a, 'OYXF') + new Date()[_0x144c29(0x349, 'y%gs')]());
    let _0x4492ef = ![];
    for (let _0x48129f = 0x0; _0x1a364f[_0x144c29(0x28f, 'n!Sk')](_0x48129f, _0x2eba53[_0x144c29(0x299, 'Qd9Y')]); _0x48129f++) {
        if (_0x1a364f[_0x144c29(0x213, 'j!jC')](_0x1a364f[_0x144c29(0x320, 'OYXF')], _0x1a364f[_0x144c29(0x1e4, 'dqkD')])) {
            const _0x1ab825 = Date[_0x144c29(0x231, 'dqkD')]();
            if (_0x1a364f[_0x144c29(0x1d4, 'eDn@')](_0x48129f, _0x1a364f[_0x144c29(0x282, 'tXw)')](_0x2eba53[_0x144c29(0x341, 'MGx8')], 0x1))) {
                if (_0x1a364f[_0x144c29(0x279, '8#b3')](_0x1a364f[_0x144c29(0x23b, 'JH*i')], _0x1a364f[_0x144c29(0x294, '8#b3')])) _0x4492ef = !![]; else {
                    _0x4abd2d[_0x144c29(0x2ff, 'MGx8')](_0x1a364f[_0x144c29(0x218, 'zaQe')], _0x79a4fc[_0x144c29(0x219, '@rEc')]);
                    return;
                }
            }
            await _0x1a364f[_0x144c29(0x2ae, 'tXw)')](_0x1ca92b, _0x75b1d6, _0x2eba53[_0x48129f][_0x144c29(0x328, ']I4k')], _0x2eba53[_0x48129f][_0x144c29(0x2f5, '[p7P')], _0x4492ef);
            const _0x4b6803 = Date[_0x144c29(0x242, 'ZE13')](),
                _0x2796c9 = _0x1a364f[_0x144c29(0x289, 'QPue')](_0x4b6803, _0x1ab825),
                _0x150940 = Math[_0x144c29(0x257, 'ti&q')](0x0, _0x1a364f[_0x144c29(0x1e5, 'wQO]')](_0x494f4b, _0x2796c9));
            await _0x1a364f[_0x144c29(0x22a, '&H!S')](sleep, _0x150940);
        } else _0x67e2e6[_0x144c29(0x21e, 'TC@A')](_0x1a364f[_0x144c29(0x24f, '5V90')], _0x4683d6[_0x144c29(0x332, 'Df4j')]);
    }
}

async function main(_0x2aa4e6) {
    const _0x42ab44 = _0xffac, _0x2f2c66 = {
        'RzxLR': function (_0x1fe9b1, _0x4a8aac) {
            return _0x1fe9b1 + _0x4a8aac;
        },
        'lwXVE': function (_0x41de66, _0x298572) {
            return _0x41de66 + _0x298572;
        },
        'XMBko': function (_0x1323e7, _0x1a3cb1) {
            return _0x1323e7 >= _0x1a3cb1;
        },
        'IUFGi': function (_0x156bc5, _0x2a7618) {
            return _0x156bc5 < _0x2a7618;
        },
        'xhwvY': function (_0x44c00c, _0x32c15c) {
            return _0x44c00c - _0x32c15c;
        },
        'MFsTZ': function (_0x5aa7f9, _0x22dbe4) {
            return _0x5aa7f9 - _0x22dbe4;
        },
        'kaeBb': function (_0x35722f, _0x6bc231) {
            return _0x35722f + _0x6bc231;
        },
        'mGsxj': function (_0xc6f01e, _0x4545e8) {
            return _0xc6f01e !== _0x4545e8;
        },
        'BjYqe': _0x42ab44(0x20b, 'TC@A'),
        'WMcwf': function (_0xc06ddd) {
            return _0xc06ddd();
        },
        'TzVOG': _0x42ab44(0x2ce, 'dqkD'),
        'zHpmH': _0x42ab44(0x251, 'YL5L'),
        'oatdQ': function (_0x576438, _0x5bdaf4, _0x2b482b) {
            return _0x576438(_0x5bdaf4, _0x2b482b);
        },
        'xFzSa': function (_0x538cd1, _0x2c56ca) {
            return _0x538cd1 === _0x2c56ca;
        },
        'Vkaxh': _0x42ab44(0x23d, 'OYXF'),
        'IoaWM': _0x42ab44(0x1d3, 'Qd9Y'),
        'Tpmqt': function (_0x55a090, _0xfa141c, _0x201a9d) {
            return _0x55a090(_0xfa141c, _0x201a9d);
        },
        'pIHoM': _0x42ab44(0x1f9, 'VX2S')
    };
    try {
        if (_0x2f2c66[_0x42ab44(0x21b, 'Qd9Y')](_0x2f2c66[_0x42ab44(0x352, 'ZE13')], _0x2f2c66[_0x42ab44(0x24c, 'dqkD')])) {
            const _0x289610 = new _0x265339(_0x2f2c66[_0x42ab44(0x247, 'lbtt')](_0x2f2c66[_0x42ab44(0x200, 'lg9%')](new _0x4618ff()[_0x42ab44(0x259, 'zaQe')](), '\x20'), _0x37cdea[_0x42ab44(0x245, 'ti&q')]))[_0x42ab44(0x33a, 'q2Tq')]();
            _0x2f2c66[_0x42ab44(0x31e, '0@I)')](_0x289610, _0x470e6e) && _0x2f2c66[_0x42ab44(0x255, 'OYXF')](_0x2f2c66[_0x42ab44(0x2bc, '0@I)')](_0x289610, _0x1a6c8b), _0x35f6ef) && (_0x254d1a = _0x2f2c66[_0x42ab44(0x2b8, '$LWh')](_0x289610, _0x53de15), _0xd50ec1 = _0x14adfa);
        } else {
            const _0x5b979a = _0x2f2c66[_0x42ab44(0x329, '@rEc')](getValidIds);
            if (!_0x5b979a) {
                console[_0x42ab44(0x2e5, '5V90')](_0x2f2c66[_0x42ab44(0x340, 'Y[Lp')]);
                return;
            }
            console[_0x42ab44(0x216, 'q2Tq')](_0x2f2c66[_0x42ab44(0x272, '5V90')], _0x5b979a[_0x42ab44(0x339, 'j!jC')]);
            const _0x36e524 = await _0x2f2c66[_0x42ab44(0x335, 'Y[Lp')](checkLoginStatus, _0x5b979a, _0x2aa4e6);
            if (!_0x36e524) {
                if (_0x2f2c66[_0x42ab44(0x209, 'jiun')](_0x2f2c66[_0x42ab44(0x208, 'KyRk')], _0x2f2c66[_0x42ab44(0x32c, 'eFfK')])) {
                    const _0x46dc54 = _0x2f2c66[_0x42ab44(0x244, '[p7P')](_0xcddf5f[_0x42ab44(0x347, '2qGK')][_0x42ab44(0x324, '&H!S')], _0x54aa68);
                    return _0x46dc54;
                } else return;
            }
            _0x2f2c66[_0x42ab44(0x262, ']I4k')](postTask, _0x5b979a, _0x2aa4e6);
        }
    } catch (_0x28b01e) {
        console[_0x42ab44(0x2dd, 'h4$$')](_0x2f2c66[_0x42ab44(0x1ff, 'lg9%')], _0x28b01e[_0x42ab44(0x2b3, 'i5)U')]);
    }
}

console[_0x184cf7(0x2d1, 'h4NR')](_0x184cf7(0x2c6, 'L**o')), console[_0x184cf7(0x23a, 'q12Y')](_0x184cf7(0x232, 'q12Y')), console[_0x184cf7(0x2ad, '5N)r')](_0x184cf7(0x2f8, 'QPue')), console[_0x184cf7(0x2ad, '5N)r')](_0x184cf7(0x321, 'y%gs')), console[_0x184cf7(0x205, 'wQO]')](_0x184cf7(0x2e4, 'I4Kv')), console[_0x184cf7(0x2e5, '5V90')](_0x184cf7(0x2da, 'q12Y')), console[_0x184cf7(0x24b, '[p7P')](_0x184cf7(0x1ca, '2qGK')), console[_0x184cf7(0x322, ']I4k')](_0x184cf7(0x20e, 'TC@A')), console[_0x184cf7(0x273, 'YL5L')](_0x184cf7(0x25f, '5N)r')), main(appck);
var version_ = 'jsjiami.com.v7';