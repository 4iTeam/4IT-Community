# HỆ THỐNG XẾP HẠNG THÀNH VIÊN TRONG NHÓM

Những điều bạn cần biết về hệ thống xếp hạng thành viên

## 4IT Community Ranking hoạt động như thế nào?

Bằng cách thu thập dữ liệu của nhóm trong 30 ngày gần nhất, 4IT Community Ranking sẽ "chấm điểm" cho mọi tương tác của bạn với nhóm.

Vậy tương tác là như thế nào?

- Bạn **đăng** (hoặc **chia sẻ**) một bài viết vào nhóm.
- Bạn **bình luận** vào một bài viết trong nhóm.
- Bạn **reaction** (Like/Love/Haha/Wow/Sad/Angry) trên một bài viết trong nhóm.
- Bạn **chia sẻ** một bài viết trong nhóm về trang cá nhân ở chế độ **Công khai**.

Tất cả những hành động trên đều là **tương tác với group**. Và hệ thống chấm điểm của mình dựa theo những hành động này. Đây đều là những hành động cơ bản trên Facebook, nên trong 30 ngày mà bạn không có bất cứ dấu hiệu nào cho thấy bạn đang ở trong group thì bạn được tự động kick ra ngoài.

Chú ý: Kick chứ không Block, bạn có quyền xin vào lại. Nhưng nếu bị Kick 3 lần khỏi nhóm thì bạn sẽ bị **Block vĩnh viễn**.

## TÔI CÓ THỂ THEO DÕI THỨ HẠNG CỦA MÌNH Ở ĐÂU?

Bạn có thể theo dõi **Top 50** thành viên có thứ hạng cao nhất cũng như tra cứu thứ hạng của mình [tại đây](ranking.html).

Ngoài ra hệ thống cũng cung cấp API để tra cứu thứ hạng.


## THỨ HẠNG CAO THÌ TÔI CÓ NHẬN ĐƯỢC GÌ KHÔNG?

Chơi game tất nhiên phải có thưởng. Với 4IT Community Ranking thì hệ thống sẽ tổng kết điểm vào mỗi ngày cuối tháng. Nếu bạn đạt hạng trong Top 3 thành viên có tổng điểm cao nhất thì bạn sẽ nhận được:

- Tài khoản One Drive 5TB (nếu chưa có).
- Top 3 thành viên thứ hạng cao nhất sẽ xuất hiện trên Cover (ảnh bìa) của nhóm.
- Nhận một số **ưu đãi**, **đặc quyền** trong nhóm 4IT Community.
- Nhận giải thưởng đặc biệt do thành viên trong nhóm tài trợ.
- Được ưu tiên nếu có xảy ra tranh chấp với thành viên khác trong nhóm.
- Được ưu tiên trong các đợt tuyển chọn thành viên vào ban Điều hành nhóm (Moderator).
- ...

## THỨ HẠNG THẤP THÌ CÓ LÀM SAO KHÔNG?
Tất nhiên rồi có thưởng thì có phạt chứ
- **Kick** hoặc **Block** khỏi nhóm
- **Không** thể xem được một số tài nguyên yêu cầu thứ hạng 

## CÂU HỎI THƯỜNG GẶP (FAQ)

### Nếu bài viết của tôi bị xóa thì tôi có bị mất điểm không?

**Có**. Vì khi cập nhật thì hệ thống thu thập lại từ đầu nên bài bị xóa thì tất nhiên không thu thập được để mà tính điểm rồi.

### Nếu tôi không hoạt động gì trong một ngày thì điểm sẽ được giữ nguyên chứ?

**Không**. Điểm sẽ bị giảm đi vì khi cập nhật thì hệ thống thu thập dữ liệu của 30 ngày trước đó chứ không từ một ngày nào cố định. Do đó, nếu bạn ngừng hoạt động thì điểm sẽ giảm dần. Sau 30 ngày không hoạt động thì điểm tự giảm xuống 0.


### Tại sao điểm của tôi bị trừ (thấp hơn) so với ngày hôm trước?

Với thuật toán tính rank thì ngày nào thành viên cũng có thay đổi về điểm (theo chiều lên/xuống) dù trong ngày bạn có hoạt động nào trong nhóm hay không. Vì rank được tính toán bằng hoạt động của thành viên trong 30 ngày gần nhất khi rank cập nhật.

Giả sử nếu ngày hôm nay là `n` thì điểm được tính trong khoảng `(n-30)` đến `n`.

Vậy nên nếu trong ngày `(n-31)` bạn kiếm được 500 điểm mà trong ngày `n` bạn chỉ kiếm được 100 điểm thì chắc chắn điểm sẽ thấy bị giảm khá nhiều vì rank chỉ giới hạn tới dữ liệu của ngày `(n-30)`.

Đừng lo vì thuật toán này áp dụng với mọi thành viên nên không có sự **BẤT THƯỜNG** nào ở đây cả. Yếu tố quyết định thứ hạng của bạn dựa vào số điểm bạn kiếm được mỗi ngày nhiều hay ít hơn ngày `(n-31)` so với thành viên khác thôi.

Thay vì thắc mắc "vì sao tôi bị trừ điểm" thì hãy thắc mắc "vì sao người khác cũng bị trừ điểm mà rank họ lại tăng". Vì thuật toán chấm điểm áp dụng lên TOÀN BỘ THÀNH VIÊN chứ không phải CHỈ MÌNH BẠN nên yếu tố quyết định thứ hạng ở đây là bạn có tương tác đủ nhiều mỗi ngày để bị trừ ít điểm hơn mọi người trong **ngày hôm sau** hay không. Hãy nhớ là tất cả cùng bị trừ điểm hoặc cộng điểm như nhau nên hoàn toàn công bằng. Không có sự thiên vị cho bất cứ ai cả!

<!--
### Tại sao số thành viên được xếp hạng nhiều hơn số thành viên hiện tại của nhóm?
-->
