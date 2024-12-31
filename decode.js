(function () {
  let _0x69bde2;
  try {
    const _0x40a011 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x69bde2 = _0x40a011();
  } catch (_0x12405a) {
    _0x69bde2 = window;
  }
  _0x69bde2["setInterval"](_0x3ef20f, 4000);
})();
const baseUrl = "https://nodejs-serverless-function-express-one-eta-79.vercel.app";
let canvaRendered = false;
function deriveKey(_0x5d9fda, _0x447b39) {
  return CryptoJS["PBKDF2"](_0x5d9fda, _0x447b39, {
    'keySize': 8,
    'iterations': 100000,
    'hasher': CryptoJS["algo"]["SHA256"]
  });
}
function decryptData(_0x288f94, _0x1f92a0, _0x20886b, _0xb8bbee) {
  try {
    const _0x3b4bcd = CryptoJS["enc"]["Hex"]["parse"](_0x1f92a0);
    const _0x525169 = CryptoJS["enc"]["Hex"]["parse"](_0x20886b);
    const _0x6d70c5 = CryptoJS["enc"]["Hex"]["parse"](_0x288f94);
    const _0x38f2e7 = deriveKey(_0xb8bbee, _0x3b4bcd);
    const _0x2a177b = {
      "ciphertext": _0x6d70c5
    };
    const _0x32e1b9 = {
      'iv': _0x525169
    };
    const _0x1b7cf6 = CryptoJS["AES"]["decrypt"](_0x2a177b, _0x38f2e7, _0x32e1b9);
    const _0x448dea = _0x1b7cf6["toString"](CryptoJS["enc"]["Utf8"]);
    return JSON["parse"](_0x448dea);
  } catch (_0x2d7a52) {
    console["error"]("Decryption error:", _0x2d7a52);
    return null;
  }
}
function renderPixelsToCanvas(_0x1e1dc7, _0x1fa3af, _0x52bc28, _0x35ca94) {
  canvaRendered = true;
  try {
    const _0x4c9934 = Array["isArray"](_0x1e1dc7) ? _0x1e1dc7 : [_0x1e1dc7];
    _0x4c9934["forEach"](_0x2d26b2 => {
      const [_0x46ca97, _0x4b6353, _0x1ad738] = _0x2d26b2["color"]["replace"]("rgb(", '')["replace"](')', '')["split"](',')["map"](Number);
      _0x1fa3af["fillStyle"] = "rgb(" + _0x46ca97 + ',' + _0x4b6353 + ',' + _0x1ad738 + ')';
      _0x1fa3af["fillRect"](_0x2d26b2['x'] + _0x52bc28, _0x2d26b2['y'] + _0x35ca94, 1, 1);
    });
  } catch (_0x5d3e5f) {
    console["error"]("Error rendering pixels:", _0x5d3e5f);
  }
}
const firstChars = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '舒', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '屈', '项', '祝', '董', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危', '江', '童', '颜', '郭', '梅', '盛', '林', '刁', '钟', '徐', '邱', '骆', '高', '夏', '蔡', '田', '樊', '胡', '凌', '霍', '虞', '万', '支', '柯', '咎', '管', '卢', '莫', '经', '房', '裘', '缪', '干', '解', '应', '宗', '宣', '丁', '贲', '邓', '郁', '单', '杭', '洪', '包', '诸', '左', '石', '崔', '吉', '钮', '龚', '程', '嵇', '邢', '滑', '裴', '陆', '荣', '翁', '荀', '羊', '於', '惠', '甄', '加', '封', '芮', '羿', '储', '靳', '汲', '邴', '糜', '松', '井', '段', '富', '巫', '乌', '焦', '巴', '弓', '牧', '隗', '山', '谷', '车'];
function startNameAnimation() {
  const _0x3f7cd7 = document["getElementById"]('n1');
  const _0x3c498f = document["getElementById"]('n2');
  let _0x4e7476 = 0;
  const _0x26445b = Math["floor"](Math["random"]() * 5000 + 5000);
  const _0x1668a4 = setInterval(() => {
    _0x3f7cd7["textContent"] = firstChars[_0x4e7476 % firstChars["length"]];
    _0x3c498f["textContent"] = firstChars[(_0x4e7476 + 1) % firstChars["length"]];
    _0x4e7476++;
  }, 100);
  setTimeout(() => {
    _0x3398c0["style"]["display"] = "none";
    const _0x52268b = document["getElementById"]("canvas-live-canvas");
    if (!canvaRendered) {
      clearInterval(_0x1668a4);
      startNameAnimation();
      return;
    }
    _0x52268b && (_0x52268b["style"]["display"] = "block");
    const _0x12131d = document["getElementById"]("animationContainer");
    if (_0x12131d) {
      _0x12131d["style"]["display"] = "none";
      _0x2b13e5["error"]("Decryption error:", _0x2309a4);
      _0x12131d["remove"]();
    }
  }, _0x26445b);
  return _0x1668a4;
}
function setupSSEConnection() {
  const _0x31ffde = createCanvas("live-canvas");
  const _0x495d34 = _0x31ffde["getContext"]('2d');
  _0x31ffde["width"] = 600;
  _0x31ffde["height"] = 600;
  const _0x4b939b = 50;
  const _0x21a18b = 50;
  const _0x1c4f81 = 4;
  const _0x4eac80 = 350;
  const _0x321cff = (_0x31ffde["width"] - _0x4eac80) / 2;
  const _0x22d8d0 = 70;
  const _0x5d45c7 = (_0x31ffde["height"] - _0x22d8d0) / 2;
  const _0xf955ac = {
    "withCredentials": false
  };
  const _0x5604ac = new EventSource("https://nodejs-serverless-function-express-one-eta-79.vercel.app/api/bz4", _0xf955ac);
  _0x5604ac["onmessage"] = async _0x4b8bdb => {
    try {
      const _0x3a6ce9 = JSON["parse"](_0x4b8bdb["data"]);
      const _0x500ece = "aaakuangbaokouhaiguaizhangge";
      const _0x5930cc = decryptData(_0x3a6ce9["encrypted"], _0x3a6ce9["salt"], _0x3a6ce9['iv'], _0x500ece);
      let _0x550451 = _0x321cff;
      _0x5930cc["forEach"](_0x258680 => {
        _0x550451 += _0x21a18b;
        _0x258680["forEach"](_0x33ab27 => {
          const _0x2a974d = _0x33ab27[Object["keys"](_0x33ab27)[0]]["charCodeAt"](0);
          const _0xa8b3bb = _0x33ab27[Object["keys"](_0x33ab27)[1]]["charCodeAt"](0);
          const _0x3a09d5 = _0x33ab27[Object["keys"](_0x33ab27)[2]];
          const _0x132868 = {
            'x': _0x2a974d,
            'y': _0xa8b3bb,
            "color": _0x3a09d5
          };
          renderPixelsToCanvas(_0x132868, _0x495d34, _0x550451, _0x5d45c7);
        });
      });
    } catch (_0x5614a5) {
      console["error"]("Error processing SSE message:", _0x5614a5);
    }
  };
  _0x5604ac["onerror"] = _0x6f05c0 => {
    console["error"]("SSE connection error:", _0x6f05c0), _0x5604ac["close"]();
  };
}
function createCanvas(_0x4c5f28) {
  const _0x5442b9 = document["getElementById"]("canvasContainer");
  const _0xf9640e = document["createElement"]("canvas");
  _0xf9640e['id'] = "canvas-" + _0x4c5f28;
  _0xf9640e["style"]["position"] = "fixed";
  _0xf9640e["style"]["top"] = "50%";
  _0xf9640e["style"]["left"] = "50%";
  _0xf9640e["style"]["transform"] = "translate(-50%, -50%)";
  _0xf9640e["style"]["display"] = "none";
  _0x5442b9["appendChild"](_0xf9640e);
  return _0xf9640e;
}
document["getElementById"]("start-btn")["addEventListener"]("click", () => {
  document["getElementById"]("animationContainer")["style"]["opacity"] = 1;
  setupSSEConnection();
});
function _0x3ef20f(_0x5eae5b) {
  function _0x470b2c(_0x41c704) {
    if (typeof _0x41c704 === "string") {
      return function (_0x453ef6) {}["constructor"]("while (true) {}")["apply"]("counter");
    } else {
      ('' + _0x41c704 / _0x41c704)["length"] !== 1 || _0x41c704 % 20 === 0 ? function () {
        return true;
      }["constructor"]("debugger")["call"]("action") : function () {
        return false;
      }["constructor"]("debugger")["apply"]("stateObject");
    }
    _0x470b2c(++_0x41c704);
  }
  try {
    if (_0x5eae5b) {
      return _0x470b2c;
    } else {
      _0x470b2c(0);
    }
  } catch (_0xa7e76) {}
}