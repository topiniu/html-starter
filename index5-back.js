
const baseUrl = 'https://nodejs-serverless-function-express-one-eta-79.vercel.app'
let canvaRendered = false
        function deriveKey(password, salt) {
            return CryptoJS.PBKDF2(password, salt, {
                keySize: 256 / 32,
                iterations: 100000,
                hasher: CryptoJS.algo.SHA256
            });
        }

        function decryptData(encryptedData, salt, iv, password) {
            try {
                // Convert hex strings to CryptoJS format
                const saltWords = CryptoJS.enc.Hex.parse(salt);
                const ivWords = CryptoJS.enc.Hex.parse(iv);
                const encryptedWords = CryptoJS.enc.Hex.parse(encryptedData);

                // Derive key using the same parameters as server
                const key = deriveKey(password, saltWords);

                // Decrypt the data
                const decrypted = CryptoJS.AES.decrypt(
                    { ciphertext: encryptedWords },
                    key,
                    { iv: ivWords }
                );

                // Convert to string and parse JSON
                const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
                return JSON.parse(decryptedStr);
            } catch (error) {
                console.error('Decryption error:', error);
                return null;
            }
        }
        // Function to render multiple pixels on canvas
        function renderPixelsToCanvas(pixels, ctx, offsetX, offsetY) {
            canvaRendered = true
            try {
                // Convert single pixel object to array if needed
                const pixelArray = Array.isArray(pixels) ? pixels : [pixels];

                pixelArray.forEach(pixel => {
                    // Parse the color string to extract r, g, b values
                    const [r, g, b] = pixel.color
                        .replace("rgb(", "")
                        .replace(")", "")
                        .split(",")
                        .map(Number);

                    ctx.fillStyle = `rgb(${r},${g},${b})`;
                    ctx.fillRect(pixel.x + offsetX, pixel.y + offsetY, 1, 1);
                });
            } catch (error) {
                console.error('Error rendering pixels:', error);
            }
        }
        // Modified to handle multiple pixels in each SSE message

        const firstChars = [
            "赵",
            "钱",
            "孙",
            "李",
            "周",
            "吴",
            "郑",
            "王",
            "冯",
            "陈",
            "褚",
            "卫",
            "蒋",
            "沈",
            "韩",
            "杨",
            "朱",
            "秦",
            "尤",
            "许",
            "何",
            "吕",
            "施",
            "张",
            "孔",
            "曹",
            "严",
            "华",
            "金",
            "魏",
            "陶",
            "姜",
            "戚",
            "谢",
            "邹",
            "喻",
            "柏",
            "水",
            "窦",
            "章",
            "云",
            "苏",
            "潘",
            "葛",
            "奚",
            "范",
            "彭",
            "郎",
            "鲁",
            "韦",
            "昌",
            "马",
            "苗",
            "凤",
            "花",
            "方",
            "俞",
            "任",
            "袁",
            "柳",
            "酆",
            "鲍",
            "史",
            "唐",
            "费",
            "廉",
            "岑",
            "薛",
            "雷",
            "贺",
            "倪",
            "汤",
            "滕",
            "殷",
            "罗",
            "毕",
            "郝",
            "邬",
            "安",
            "常",
            "乐",
            "于",
            "时",
            "傅",
            "皮",
            "卞",
            "齐",
            "康",
            "伍",
            "余",
            "元",
            "卜",
            "顾",
            "孟",
            "平",
            "黄",
            "和",
            "穆",
            "萧",
            "尹",
            "姚",
            "邵",
            "舒",
            "汪",
            "祁",
            "毛",
            "禹",
            "狄",
            "米",
            "贝",
            "明",
            "臧",
            "计",
            "伏",
            "成",
            "戴",
            "谈",
            "宋",
            "茅",
            "庞",
            "熊",
            "纪",
            "屈",
            "项",
            "祝",
            "董",
            "杜",
            "阮",
            "蓝",
            "闵",
            "席",
            "季",
            "麻",
            "强",
            "贾",
            "路",
            "娄",
            "危",
            "江",
            "童",
            "颜",
            "郭",
            "梅",
            "盛",
            "林",
            "刁",
            "钟",
            "徐",
            "邱",
            "骆",
            "高",
            "夏",
            "蔡",
            "田",
            "樊",
            "胡",
            "凌",
            "霍",
            "虞",
            "万",
            "支",
            "柯",
            "咎",
            "管",
            "卢",
            "莫",
            "经",
            "房",
            "裘",
            "缪",
            "干",
            "解",
            "应",
            "宗",
            "宣",
            "丁",
            "贲",
            "邓",
            "郁",
            "单",
            "杭",
            "洪",
            "包",
            "诸",
            "左",
            "石",
            "崔",
            "吉",
            "钮",
            "龚",
            "程",
            "嵇",
            "邢",
            "滑",
            "裴",
            "陆",
            "荣",
            "翁",
            "荀",
            "羊",
            "於",
            "惠",
            "甄",
            "加",
            "封",
            "芮",
            "羿",
            "储",
            "靳",
            "汲",
            "邴",
            "糜",
            "松",
            "井",
            "段",
            "富",
            "巫",
            "乌",
            "焦",
            "巴",
            "弓",
            "牧",
            "隗",
            "山",
            "谷",
            "车"
        ];
        const secondChars = [
            "侯",
            "宓",
            "蓬",
            "全",
            "郗",
            "班",
            "仰",
            "秋",
            "仲",
            "伊",
            "宫",
            "宁",
            "仇",
            "栾",
            "暴",
            "甘",
            "钭",
            "厉",
            "戎",
            "祖",
            "武",
            "符",
            "刘",
            "詹",
            "束",
            "哥",
            "叶",
            "幸",
            "姐",
            "韶",
            "郜",
            "叔",
            "蓟",
            "薄",
            "印",
            "姨",
            "白",
            "怀",
            "蒲",
            "台",
            "从",
            "鄂",
            "索",
            "咸",
            "籍",
            "赖",
            "卓",
            "蔺",
            "屠",
            "蒙",
            "池",
            "乔",
            "阴",
            "胥",
            "能",
            "苍",
            "双",
            "闻",
            "莘",
            "党",
            "翟",
            "谭",
            "贡",
            "劳",
            "逄",
            "姬",
            "申",
            "扶",
            "堵",
            "冉",
            "宰",
            "郦",
            "雍",
            "璩",
            "桑",
            "桂",
            "濮",
            "牛",
            "寿",
            "通",
            "边",
            "扈",
            "燕",
            "冀",
            "郏",
            "浦",
            "尚",
            "农",
            "温",
            "别",
            "庄",
            "晏",
            "柴",
            "瞿",
            "阎",
            "充",
            "慕",
            "连",
            "茹",
            "习",
            "宦",
            "艾",
            "鱼",
            "容",
            "向",
            "古",
            "易",
            "慎",
            "戈",
            "廖",
            "庚",
            "终",
            "暨",
            "居",
            "衡",
            "步",
            "都",
            "耿",
            "满",
            "弘",
            "匡",
            "国",
            "文",
            "寇",
            "广",
            "禄",
            "阙",
            "东",
            "殳",
            "沃",
            "利",
            "蔚",
            "越",
            "夔",
            "隆",
            "师",
            "巩",
            "厍",
            "聂",
            "晁",
            "勾",
            "敖",
            "融",
            "冷",
            "訾",
            "辛",
            "阚",
            "那",
            "简",
            "饶",
            "空",
            "曾",
            "毋",
            "沙",
            "乜",
            "养",
            "鞠",
            "须",
            "丰",
            "巢",
            "关",
            "蒯",
            "相",
            "查",
            "后",
            "红",
            "游",
            "竺",
            "权",
            "逯",
            "盖",
            "益",
            "桓",
            "公",
            "晋",
            "楚",
            "法",
            "汝",
            "鄢",
            "涂",
            "钦",
            "缑",
            "亢",
            "况",
            "有",
            "商",
            "牟",
            "佘",
            "佴",
            "伯",
            "赏",
            "墨",
            "哈",
            "谯",
            "笪",
            "年",
            "爱",
            "阳",
            "佟",
            "琴",
            "言",
            "福",
            "百",
            "家",
            "姓",
            "续",
            "岳",
            "帅",
            "哥"
        ];

        // Add this before setupSSEConnection
        function startNameAnimation() {
            const n1 = document.getElementById('n1');
            const n2 = document.getElementById('n2');
            let index = 0;

            // Generate random duration between 5 and 10 seconds
            const animationDuration = Math.floor(Math.random() * (10000 - 5000) + 5000);

            const animationInterval = setInterval(() => {
                n1.textContent = firstChars[index % firstChars.length];
                n2.textContent = firstChars[(index + 1) % firstChars.length];
                index++;
            }, 100);

            // Stop animation and show canvas after random duration
            setTimeout(() => {
                // if no canva, continue the animation
                const canvas = document.getElementById('canvas-live-canvas');
                if (!canvaRendered) {
                    clearInterval(animationInterval);
                    startNameAnimation();
                    return;
                }
                if (canvas) {
                    canvas.style.display = 'block';
                }
                const animationContainer = document.getElementById('animationContainer');
                if (animationContainer) {
                    animationContainer.style.display = 'none';
                    // remove the animation container
                    animationContainer.remove();
                }
            }, animationDuration);

            return animationInterval;
        }

        // Modify setupSSEConnection function
        function setupSSEConnection() {
            const canvas = createCanvas('live-canvas');
            const ctx = canvas.getContext("2d");
            const animationInterval = startNameAnimation();

            // Set initial canvas size
            canvas.width = 600;
            canvas.height = 600;

            // Calculate the horizontal center (x position)
            const charWidth = 50;
            const charGap = 50;
            const numChars = 4;
            const totalTextWidth = (charWidth + charGap) * (numChars - 1) + charWidth;
            const startX = (canvas.width - totalTextWidth) / 2;

            // Calculate the vertical center (y position)
            const charHeight = 70;
            const startY = (canvas.height - charHeight) / 2;

            // Connect to SSE endpoint
            const evtSource = new EventSource(`${baseUrl}/api/bz4`, {
                withCredentials: false
            });

            evtSource.onmessage = async (event) => {
                try {
                    const encryptedItems = JSON.parse(event.data);
                    const password = 'aaakuangbaokouhaiguaizhangge';

                    const jsonData = decryptData(encryptedItems.encrypted, encryptedItems.salt, encryptedItems.iv, password);

                    let offsetX = startX;
                    let offsetY = startY;
                    jsonData.forEach(textItemSet => {
                        offsetX += charGap;
                        textItemSet.forEach(pixel => {
                            const x = pixel[Object.keys(pixel)[0]].charCodeAt(0);
                            const y = pixel[Object.keys(pixel)[1]].charCodeAt(0);
                            const color = pixel[Object.keys(pixel)[2]];
                            renderPixelsToCanvas({ x, y, color }, ctx, offsetX, offsetY);
                        })
                    })
                } catch (error) {
                    console.error('Error processing SSE message:', error);
                }
            };

            evtSource.onerror = (error) => {
                console.error('SSE connection error:', error);
                evtSource.close();
            };
        }


        // Function to create a new canvas
        function createCanvas(filename) {
            const container = document.getElementById('canvasContainer');
            const canvas = document.createElement('canvas');
            canvas.id = `canvas-${filename}`;
            canvas.style.position = 'fixed';
            canvas.style.top = '50%';
            canvas.style.left = '50%';
            canvas.style.transform = 'translate(-50%, -50%)';
            // Initially hide the canvas
            canvas.style.display = 'none';
            container.appendChild(canvas);
            return canvas;
        }

        document.getElementById('start-btn').addEventListener('click', () => {
            // show animation container
            document.getElementById('animationContainer').style.opacity = 1;
            setupSSEConnection();
        });