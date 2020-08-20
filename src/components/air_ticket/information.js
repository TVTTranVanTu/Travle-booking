import React, { useState } from 'react';


function Information() {
    const [height, setHeight] = useState(`160px`);
    const [overflow, setOverflow] = useState(`hidden`);
    const [active, setActive] = useState(true);
    const view = () => {
        console.log(height)
        setHeight(`auto`)
        setOverflow(`unset`)
        setActive(!active)
    }
    const hidden = () => {
        console.log(height)
        setHeight(`160px`)
        setOverflow(`hidden`)
        setActive(!active)
    }
    return (
        <div className="information">
            <div className="container">
                <div className="promotion-hot">
                    <div className="promotion-hot__title">
                        <h1>Vntrip đồng hành cùng bạn trong những chuyến bay!</h1>
                    </div>
                    <div className="promotion-selected__contents">
                        <div className="promotion-selected__contents__image">
                            <img src={require(`../../assets/img/image_icon/luachonhangdau.png`)} alt="icon"></img>
                        </div>
                        <div className="promotion-selected__contents__texts" style={{ height: `${height}`, overflow: `${overflow}` }}>
                            <p>Đi du lịch thì điều quan trọng nhất chính là thoải mái. Chính vì vậy mà việc đặt vé máy bay cũng cần thật đơn giản, nhanh chóng. Với Vntrip việc đặt vé máy bay của bạn chưa bao giờ dễ dàng đến thế!</p>
                            <div className="text-title">
                                <h4>Vntrip lắng nghe nỗi lo của bạn trước mỗi chuyến bay và cung cấp giải pháp trọn vẹn dành cho bạn!</h4>
                            </div>
                            <div className="text-content">
                                <p>Thực tế cho thấy khi đặt vé máy bay, trong đầu chúng ta thường xuất hiện hàng ngàn câu hỏi như: đặt vé máy bay ở đâu, thanh toán ra sao, giá vé có tốt không, thủ tục thế nào,...cùng vô vàn những câu hỏi hỏi khác. Thấu hiểu điều đó, Vntrip cung cấp giải pháp trọn vẹn dành cho bạn thông qua việc đặt vé máy bay trực tuyến trên website hoặc ứng dụng trên điện thoại. Toàn bộ thắc mắc của bạn sẽ được đội ngũ nhân viên tại Vntrip giải thích rõ ràng, chi tiết, tận tâm giúp bạn an tâm trong mỗi chặng bay của mình. Bạn biết chính xác mình muốn đi đâu, vào thời gian nào,...Vntrip cũng hiểu được điều đó. Chúng tôi giúp bạn tìm giá tốt nhất trong số hàng ngàn chuyến bay, lựa chọn những khách sạn tốt nhất trong hàng ngàn khách sạn. Với Vntrip các công đoạn chuẩn bị cho chuyến đi của bạn đều được rút ngắn lại.
                                    </p>
                                <div className="text-title">
                                    <h4>Dễ dàng so sánh vé máy bay giữa các hãng
                                    </h4>
                                </div>
                                <p>Vntrip sử dụng hệ thống GDS hiện đại nhất trong ngành du lịch để kết nối hợp tác với toàn bộ các hãng bay nội địa và quốc tế giúp hiển thị đầy đủ tất cả những chuyến bay phù hợp với nhu cầu của bạn và được sắp xếp theo thứ tự bạn ưu tiên. Đồng thời giúp bạn dễ dàng so sánh về giá vé.
                                        </p>
                                <div className="text-title">
                                    <h4>Mức giá hiển thị là giá cuối cùng</h4>
                                </div>
                                <p>Mỗi chặng bay sẽ có độ chênh lệch lớn về giá vì chính sách giá là khác nhau giữa các hãng bay, điều đó khiến bạn phải khổ tâm tính toán. Chính vì thế mà mức giá hiển thị khi bạn đặt vé tại Vntrip chính là mức giá cuối cùng mà bạn phải thanh toán (giá đã bao gồm tiền vé, thuế, phụ phí khác)</p>
                                <div className="text-title">
                                    <h4>Thông tin khuyến mãi luôn được cập nhật liên tục</h4>
                                </div>
                                <p>Là đại lý cấp I của các hãng máy bay nên Vntrip sẽ luôn cập nhật liên tục các thông tin ưu đãi của hãng đến khách hàng trong thời gian sớm nhất và đầy đủ nhất. Khách hàng sẽ không bỏ lỡ cơ hội tham gia các chương trình: " Thứ 5 rực rỡ", "Mùa thu vàng" của Vietnam Airlines, "Ưu đãi giảm giá 50%" của Vietjet hay "Mùa Thu Vàng", "Săn vé 0 đồng" cực hấp dẫn.<br />Với Vntrip, khách hàng yên tâm tận hưởng chuyến bay với giá tốt nhất, phù hợp nhất.</p>
                                <div className="text-title">
                                    <h4>Thanh toán an toàn và nhanh chóng</h4>
                                </div>
                                <p>Việc thanh toán online đã khiến không ít người cảm thấy bất an về chất lượng. Chính vì thế chúng tôi hỗ trợ bạn thanh toán thông qua 3 phương pháp là thanh toán trực tiếp qua website, chuyển khoản và thông qua đại lý. Thông tin thanh toán được lưu lại trên hệ thống để bạn dễ dàng kiểm tra và theo dõi. Các thông tin này hoàn toàn bảo mật vì mục tiêu tôn trọng người dùng của Vntrip.</p>
                                <div className="text-title">
                                    <h4>Sẵn sàng hỗ trợ mọi lúc mọi nơi</h4>
                                </div>
                                <p>Đội ngũ của Vntrip làm việc 24/7, sẵn sàng hỗ trợ và giải đáp mọi thắc mắc cho bạn mỗi khi bạn cần. Cụ thể như bạn muốn hiểu hơn về quy định hành lý, muốn mua thêm cân, xử lý khi điền sai thông tin, đến trễ giờ bay,....Tất cả những vấn đề bạn gặp sẽ được đội ngũ tại Vntrip hỗ trợ tận tâm.</p>
                                <div className="text-title">
                                    <h4>Trải nghiệm đặt vé máy bay tuyệt vời cùng Vntrip</h4>
                                </div>
                                <p>Vntrip là công ty du lịch trực tuyến cung cấp nền tảng đặt vé máy bay và khách sạn hàng đầu Việt Nam - là đại lý cấp một của các hãng bay nội địa: Vietnam Airline, Bamboo Airways, Vietjet, Jetstar, đồng thời kết nối với các hầu hết các hãng bay quốc tế. Vntrip sẽ luôn đồng hàng cùng bạn trong những chuyến bay bằng dịch vụ đặt vé máy bay trực tuyến với vé máy bay giá rẻ &amp; dịch vụ tư vấn chăm sóc tận tâm.</p>
                                <p>Tại Vntrip luôn có sẵn các chặng bay bạn cần tại bất kì thời điểm nào trong năm. Bạn muốn dừng chân ở các thành phố lớn như TP. HCM, Hà Nội, Đà Nẵng.. hay trải nghiệm kỳ nghỉ lễ đáng giá tại Nha Trang, Quy Nhơn, Phú Quốc. Đà Lạt….tất cả đều trở nên thật đơn giản nhờ giờ bay linh hoạt và đa dạng địa điểm khởi hành. Từ đó bạn có thể dễ dàng lựa chọn được lịch trình phù hợp nhất.</p>
                                <p>Nếu như trước kia, việc đặt vé máy bay đòi hỏi bạn phải thực hiện nhiều thao tác, cung cấp nhiều thông tin thì Vntrip sẽ mang đến cho bạn một nền tảng đặt vé đơn giản, thuận tiện, đặt chỗ nhanh chóng chỉ với 3 cú click chuột.</p>
                                <ul>
                                    <li>Bước 1: Điền thông tin về điểm khởi hành, điểm đến, thời gian, số hành khách. Sau đó click vào ô “Tìm Chuyến Bay”</li>
                                    <li>Bước 2: Tham khảo và lựa chọn chuyến bay phù hợp nhất với nhu cầu của mình. Sau đó click vào ô “Chọn Vé”</li>
                                    <li>Bước 3: Hoàn thành các bước chọn vé, điền thông tin hành khách. Sau đó click vào ô “Tiếp tục”</li>
                                </ul>
                                <p>Hoàn thành 3 bước trên đồng nghĩa với việc bạn đã đặt vé máy bay thành công. Bạn chỉ cần hoàn thành thêm các bước thanh toán là đã có thể yên tâm vi vu tới vùng đất mà mình yêu thích.</p>
                                <p>Nhờ nền tảng đặt vé máy bay hiện đại của Vntrip việc so sánh giá, thời gian của các hãng hàng không như Vietnam Airlines, VietJet Air và Jetstar cũng trở nên vô cùng đơn giản. Sau khi bạn lựa chọn được điểm xuất phát, điểm đến, ngày bay thì hệ thống sẽ tổng hợp tất cả các chuyến bay (bao gồm giá, thời gian, hãng máy bay, hành lý được hỗ trợ) để bạn tiện so sánh và lựa chọn vé máy bay phù hợp nhất với lịch trình của mình. Các kết quả này cũng được lọc theo nhu cầu mà bạn ưu tiên như: mức giá thấp nhất, cất cánh sớm nhất, cất cánh muộn nhất, hạ cánh sớm nhất, hạ cánh muộn nhất, thời gian bay ngắn nhất. Không cần phải mở nhiều tab, truy cập nhiều website, tất cả đều hiển thị trong một trang giúp bạn quan sát dễ dàng. Việc tổng hợp và hiển thị tất cả những chuyến bay dựa theo tìm kiếm của bạn cũng đảm bảo tính minh bạch, dễ dàng, tiện dụng. Mức giá hiển thị là mức giá cuối cùng mà bạn phải trả, bạn sẽ không phải tính toán hay đau đầu cộng thêm các khoản phí và thuế phí khi đặt vé máy bay.</p>
                                <p>Không dừng lại tại đó, Vntrip còn liên tục tung ra nhiều chương trình khuyến mãi hấp dẫn giúp bạn có cơ hội “săn vé máy bay 0 đồng” hay “săn vé máy bay siêu rẻ chỉ từ 39k, 99k”,...Đặc biệt vào những dịp lễ tết trên hệ thống của Vntrip luôn ngập tràn khuyến mãi như khuyến mãi chào hè, mở đường bay mới, thứ 5 rực rỡ,...Các chương trình khuyến mãi cũng thường diễn ra trong nhiều ngày, thường là từ 5 - 7 ngày. Thông tin được đăng tải trên website, fanpage cũng như truyền thông rộng rãi trên toàn hệ thống của Vntrip để bạn có cơ hội mua vé giá hời.</p><p>Khi mua vé máy bay trực tuyến, việc thanh toán cũng có thể là trở ngại lớn với nhiều người. Tuy nhiên, hãy gạt bỏ những nỗi lo đó thông qua việc thanh toán đơn giản, tin cậy tại Vntrip. Bạn có thể hoàn toàn yên tâm khi lựa chọn thanh toán bằng 1 trong 3 phương pháp sau:</p>
                                <ul>
                                    <li>+ Thanh toán trực tiếp qua website</li>
                                    <li>+ Thanh toán bằng hình thức chuyển khoản</li>
                                    <li>+ Thanh toán qua các đại lý chính thức của Vntrip</li>
                                </ul>
                                <p>Với hai hình thức thanh toán là qua website và chuyển khoản, Vntrip hỗ trợ bạn 5 cách thức để hoàn thành bước thanh toán của mình như thanh toán bằng thẻ nội địa, thanh toán bằng thẻ quốc tế, thanh toán bằng ví Airpay, thanh toán bằng ví ZaloPay hoặc thanh toán bằng ví Momo. Việc thực hiện thanh toán thông qua các giao dịch trực tuyến vừa giúp bạn tiết kiệm thời gian lại có thể yên tâm vì thông tin giao dịch chi tiết sẽ được lưu lại trên hệ thống giúp bạn dễ dàng kiểm tra và đối chiếu.</p>
                                <div className="text-title">
                                    <h4>Dịch vụ chăm sóc tư vấn 5 sao</h4>
                                </div>
                                <p>Với đội ngũ trên 200 nhân viên chăm sóc khách hàng với nghiệp vụ cao, được đào tạo bài bản. Sẵn sàng tư vấn thông tin chuyên nghiệp và chăm sóc khách hàng 24/7. Khách hàng có thể để lại câu hỏi hoặc vấn đề thắc mắc cần giải đáp với Vntrip thông qua email / hotline / fanpage... Vntrip sẽ liên hệ trong thời gian sớm nhất để tư vấn và chăm sóc đến khi bạn hài lòng.</p><p>Các tình huồng phát sinh như: đặt vé bay gấp, chuyến bay hết chỗ... luôn được Vntrip tận tâm hỗ trợ để đảm bảo khách hàng có chuyến bay như ý! Đừng ngại ngần liên hệ với Vntrip qua:<br />
                                    <strong>Email: cs@vntrip.vn</strong><br /><strong>Hotline:0963 266 688</strong></p>
                                <div className="text-title">
                                    <h4>Cùng Vntrip đi hết Việt Nam mình</h4>
                                </div>
                                <p>Hãy đi bất cứ nơi đâu mà bạn muốn, đi để khám phá và lấp đầy tuổi trẻ bằng những trải nghiệm tuyệt vời. Hãy đi để thấy rằng Việt Nam mình tươi đẹp đến nhường nào!</p>
                                <div className="text-title">
                                    <h4>Đà Nẵng</h4>
                                </div>
                                <p>Không phải ngẫu nhiên mà Đà Nẵng được mệnh danh là “Thành phố đáng sống” và được New York Times bình chọn là một trong những điểm đến lý tưởng trên thế giới vào năm 2015. Nơi đây không chỉ sở hữu vẻ đẹp thiên nhiên trù phú mà còn sở hữu nhiều công trình kiến trúc độc đáo khiến bất kỳ ai khi tới cũng không khỏi thích thú.</p>
                                <p>Tới Đà Nẵng, bạn nhất định không thể bỏ qua cảm giác được hòa mình tại bãi biển quyến rũ nhất hành tinh - biển Mỹ Khê, những con đường ven biển tuyệt đẹp hay những công trình kiến trúc độc đáo như cầu Rồng, Bà Nà Hill, Cầu Vàng, tượng cá chép,...</p>
                                <p>Đồ ăn Đà Nẵng thì nổi tiếng ngon rẻ, điều này khỏi phải bàn cãi. Ở Đà Nẵng bạn có thể ăn no bụng chỉ với 15.000 - 20.000 đồng với các món ăn vặt như béo xèo, nem lụi, bánh mì, bánh tráng cho tới những tô bún mắm, bún thịt nướng thơm lừng,...</p>
                                <p>Điều mà người ta cảm thấy thoải mái nhất khi đi du lịch Đà Nẵng chính là lòng mến khách và thân thiện của người dân nơi đây. Khi nhắc tới du lịch phát triển nhiều người sẽ mường tượng về một nơi đông đúc, nhộn nhịp và “nạn chặt chém” là dễ xảy ra. Nhưng với Đà Nẵng thì không. Người dân Đà Nẵng vô cùng mến khách, ngay khi đặt chân xuống sân bay, điều bạn nhận được đầu tiên chính là một nụ cười đầy thân thiện. Nếu bạn di chuyển có chẳng may đi lạc thì thay vì loay hoay với google maps bạn hãy hỏi người dân xung quanh, chắc chắn bạn sẽ tìm được nhanh chóng hơn rất nhiều. Rồi thì Đà Nẵng cũng nhỏ thôi, không rộng lớn như bạn vẫn nghĩ và điều thú vị là ở Đà Nẵng hiếm có kẹt xe nên sẽ thật tuyệt nếu bạn có một chiếc xe chạy vòng vòng quanh thành phố. Là người Việt Nam mà chưa một lần đặt chân tới Đà Nẵng thì quả là điều tiếc nuối!</p>
                                <div className="text-title">
                                    <h4>Hội An</h4>
                                </div>
                                <p>Hội An - đã bao giờ bạn thử ngẫm nghĩ về cái tên này chưa? Và đúng như tên gọi, Hội An là địa điểm du lịch mang màu sắc của sự cổ kính, trầm mặc bao đời, là nơi hội tụ sự bình yên, an lành. Khoác lên mình màu áo vàng rực cùng nét đẹp văn hóa bao đời, đây không chỉ là nơi lưu trữ nhiều giá trị văn hóa truyền thống của dân tộc mà còn là nơi khơi nguồn cho biết bao tác phẩm nghệ thuật, nhiếp ảnh,....</p>
                                <p>Nếu có dịp tới Hội An bạn có thể ghé thăm các địa điểm du lịch nổi tiếng như: Phố cổ Hội An, Chùa Cầu, Hội Quán Triều Châu, Làng gốm Thanh Hà, bãi biển An Bàng, bãi biển Cửa Đại hay trải nghiệm nghỉ dưỡng tại Vinpearl Nam Hội An,.... Ẩm thực Hội An cũng có vô vàn món ăn hấp dẫn để bạn tha hồ thưởng thức như: cơm gà, cao lầu, mì quảng,...hay một số loại bánh nổi tiếng của nơi này như: bánh quai vạc, bánh đập hến xào, bánh mì Phượng,....</p>
                                <div className="text-title">
                                    <h4>Phú Quốc</h4>
                                </div>
                                <p>Phú Quốc hay còn có tên gọi khác là đảo Ngọc, là một quần đảo xinh đẹp thuộc tỉnh Kiên Giang. Nơi đây không chỉ thu hút du khách bởi thiên nhiên trù phú, hải sản đa dạng mà còn sở hữu nhiều khách sạn, resort đẳng cấp. Hứa hẹn sẽ mang đến cho bạn một kỳ nghỉ tuyệt vời. Thời điểm lý tưởng nhất để bạn đi du lịch Phú Quốc là từ tháng 10 đến tháng 3 năm sau. Vì đây là mùa khô nên nước biển lúc nào cũng trong vắt, nhiều san hô, đặc biệt là trời nắng nhẹ rất thuận tiện cho việc tham quan, khám phá đảo.</p>
                                <p>Để có thể tới đảo Ngọc Phú Quốc bạn cần di chuyển tới thành phố Rạch Giá sau đó đi tàu cao tốc để ra đảo. Hãng tàu cao tốc khai thác hành trình từ Rạch Giá đến Phú Quốc là Superdong khởi hành lúc 8h và 13h. Thời gian di chuyển tới đảo khoảng 2,5h.</p>
                                <p>Thưởng ngoạn đảo Phú Quốc xinh đẹp bạn nhất định không thể bỏ lỡ những địa điểm du lịch nổi tiếng như: Mũi Gành Dầu, Hòn Thơm, Bãi Dài, Bãi Sao, Bãi Khem, Bắc Đảo,...và một số địa điểm du lịch nổi tiếng như nhà tù Phú Quốc, Dinh Cậu,....Ngoài cảnh đẹp thì hoạt động vui chơi giải trí cũng vô cùng sôi nổi tại đây. Bạn sẽ có cơ hội khám phá Vinpearl Safari - mô hình vườn thú hiện đại với quy mô lớn tại Việt Nam, tham gia các trò chơi giải trí vui nhộn tại Vinpearl Phú Quốc, trải nghiệm lặn biển ngắm san hô, câu mực đêm, khám phá rừng nguyên sinh,...Tất cả sẽ mang đến cho bạn những trải nghiệm du lịch tuyệt vời.</p><p>Ẩm thực Phú Quốc cũng vô cùng đa dạng và phong phú. Bạn có thể thưởng thức rất nhiều món ăn độc đáo, đặc biệt là các món hải sản. Một số món ngon Phú Quốc mà bạn không nên bỏ lỡ như: gỏi cá trích, ghẹ Hàm Ninh, Còi Biên Mai nướng, nấm tràm,....Nếu muốn mua đặc sản Phú Quốc về làm quà cho bạn bè người thân của mình thì nước mắm, hồ tiêu hay rượu sim là phù hợp nhất.</p>
                                <p>Cuối cùng, điều mà có lẽ ai khi tới Phú Quốc cũng muốn được trải nghiệm chính là nghỉ dưỡng tại những khách sạn 5 sao hay resort sang trọng. Một số khách sạn Phú Quốc lý tưởng để bạn tham khảo cho chuyến du lịch của mình như: Vinpearl Phú Quốc Resort &amp; Golf, Khu nghỉ dưỡng THELAM, Palma Resort, khách sạn Ngọc Châu Phú Quốc,...</p>
                                <div className="text-title">
                                    <h4>Nha Trang</h4>
                                </div>
                                <p>Nha Trang là điểm đến lý tưởng dành cho những ai ưa khám phá và trải nghiệm. Tới Nha Trang bạn có thể thỏa sức khám phá nhiều hòn đảo xinh đẹp và nổi tiếng như: đảo Bình Ba, đảo Hòn Mun,....hay tham quan các công trình kiến trúc văn hóa nổi tiếng của nơi này như: tháp Bà Ponagar, nhà thờ đá, chùa Long Sơn,....</p>
                                <p>Thời tiết Nha Trang nhìn chung khá ôn hòa, được chia thành 2 mùa rõ rệt là mùa khô và mùa mưa. Chính vì vậy mùa khô được cho là thời điểm lý tưởng để bạn khám phá nơi này. Theo kinh nghiệm du lịch Nha Trang của mình thì khoảng thời gian từ tháng 7 đến tháng 9 dương lịch là lý tưởng nhất. Nếu không sắp xếp được thời gian du lịch Nha Trang thời điểm đó thì bạn có thể tới đây vào bất kỳ thời điểm nào trong năm. Tuy nhiên cần xem trước dự báo thời tiết để đảm bảo có một chuyến du lịch hoàn hảo nhất nhé.</p>
                                <p>Phương tiện di chuyển tới Nha Trang từ các thành phố lớn như Hà Nội, Sài Gòn vô cùng đa dạng. Bạn có thể việc di chuyển bằng máy bay, tàu, xe khách. Việc di chuyển bằng máy bay sẽ giúp bạn tiết kiệm thời gian và thuận tiện nhất. Cần lên kế hoạch sớm để có thể đặt vé máy bay giá rẻ.</p>
                                <p>Nếu hỏi “Ăn gì ở Nha Trang ngon nhất?” thì câu trả lời sẽ là hải sản tươi, bún chả cá, bún sứa, nem Ninh Hòa, bánh canh,....Đây đều là những món ăn nổi tiếng và có mức giá phù hợp, vì thế đừng bỏ qua chúng trong chuyến du lịch Nha Trang sắp tới.</p>
                                <div className="text-title">
                                    <h4>Đà Lạt</h4>
                                </div>
                                <p>Được nhiều người ưu ái đặt tên là “thành phố sương mù”, “xứ sở ngàn hoa”,...Đà Lạt là một trong những địa điểm du lịch trong nước mà bạn nhất định phải tới một lần trong đời. Nơi đây không chỉ sở hữu không khí trong lành, dễ chịu mà cảnh sắc thiên nhiên cũng vô cùng thơ mộng, hữu tình.</p>
                                <p>Với đặc điểm thời tiết 4 mùa trong một ngày nên bạn có thể tới Đà Lạt vào bất kỳ thời điểm nào trong năm. Tuy nhiên, khoảng thời gian từ cuối tháng 10 đến đầu tháng 12 được nhiều người nói là đẹp nhất. Vì đây là mùa cỏ hồng, hơn nữa còn là mùa khô nên Đà Lạt thường không có mưa, trời đẹp, thuận tiện cho việc du lịch, chụp hình,....</p>
                                <p>Phương tiện di chuyển tới Đà Lạt từ Hà Nội, Sài Gòn, Đà Nẵng lý tưởng nhất vẫn là máy bay. Tuy nhiên, vì là một điểm đến cực hot nên để có thể mua được vé máy bay giá rẻ thì cách tốt nhất là bạn nên lên kế hoạch sớm và đặt vé nhanh chóng. Ngoài ra, để di chuyển giữa các điểm tham quan tại Đà Lạt thì bạn có thể lựa chọn xe máy hoặc ô tô. Nếu có thể bạn nên đi xe máy, vì đường ở Đà Lạt rất đẹp, không đông đúc và ít bụi nên chạy xe máy hít hà chút không khí cũng khiến chuyến đi của bạn ý nghĩa hơn nhiều rồi.</p>
                                <p>Các địa điểm du lịch nổi tiếng ở Đà Lạt phải kể tới như: Hồ Xuân Hương, Chợ Đà Lạt, Dinh Bảo Đại, Ga Đà Lạt, Nhà Thờ Con Gà, các vườn hoa Đà Lạt, Tiệm Bánh Cối Xay Gió,.... Món ngon Đà Lạt nhất định phải thưởng thức là lẩu bò, lẩu gà lá é, lẩu rau Đà Lạt, kem bơ, bánh tráng nướng,....</p>
                                <div className="text-title">
                                    <h4>Quy Nhơn - Phú Yên</h4>
                                </div>
                                <p>Các tín đồ du lịch thường ví von Quy Nhơn như một thiên đường ẩm thực đích thực tại Việt Nam. Vì đồ ăn Quy Nhơn vừa ngon, vừa rẻ, chỉ cần cầm trong tay vài trăm nghìn là bạn đã có thể thưởng thức ti tỉ đặc sản hấp dẫn nơi đây. Nói vậy không có nghĩa là cảnh sắc thiên nhiên Quy Nhơn - Bình Định không làm nao lòng du khách. Vào mùa du lịch, trên facebook, instagram hay youtube thường ngập tràn hình ảnh chia sẻ về địa điểm du lịch hấp dẫn này. Thế mới thấy ai tới đây cũng đều đem về cho mình những tấm hình hay những đoạn video xuất sắc để khoe với bạn bè,...Những địa điểm du lịch hấp dẫn không thể bỏ qua khi đi du lịch Quy Nhơn là Eo Gió, Kỳ Co, Hòn Khô, Cù Lao Xanh, Ghềnh Ráng, Tháp Đôi, Hòn Sẹo,....</p>
                                <p>Du lịch Quy Nhơn thì thời điểm lý tưởng nhất là vào những tháng mùa hè khoảng tháng 5,6,7. Lúc này thời tiết nắng đẹp, rất thích hợp để khám phá biển xanh cát trắng. Nếu có thời gian bạn có thể kết hợp du lịch Quy Nhơn và du lịch vùng đất hoa vàng trên cỏ xanh Phú Yên. Vì hai địa điểm này cũng không cách xa nhau. Các địa điểm du lịch Phú Yên nổi tiếng như: Cầu Ông Cọp, Núi Ông, check in tại kèm chắn sóng Xóm Rớ, vịnh Vũng Rô, Cù Lao Mái Nhà,...</p>
                                <p>Phương tiện di chuyển giữa các điểm tham quan tại Quy Nhơn và Phú Yên các bạn nên lựa chọn là xe máy. Tuy nhiên, cần đảm bảo chắc tay lái để có một chuyến đi an toàn. Những món ngon Quy Nhơn bạn nên thử là bánh canh chả cá, bánh xèo tôm nhảy, bánh hỏi cháo lòng, nem nướng, gỏi sứa, bánh bèo chén, gỏi cá chình,....</p><p>Trên đây là một số địa điểm du lịch trong nước nổi bật được nhiều du khách yêu thích, vẫn còn rất nhiều điểm đến hấp dẫn khác tại Việt Nam đang chờ bạn khám phá! Cùng Vntrip lên kế hoạch và vi vu thôi nào!</p>
                            </div>

                        </div>
                        <a href="/" className="click-view-more-selected">
                            <span className={`${active === true ? "active" : "hidden"}`} onClick={() => view()}>
                                Xem thêm <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </span>
                            <span className={`${active === true ? "hidden" : "active"}`} onClick={() => hidden()}>
                                Thu gọn <i className="fa fa-angle-up" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;