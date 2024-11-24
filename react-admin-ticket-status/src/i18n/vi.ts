import { TranslationMessages } from 'react-admin';
import vietnameseMessages from 'ra-language-vietnamese';

const customVietnameseMessages: TranslationMessages = {
    ...vietnameseMessages,
    pos: {
        home: "Trang chủ",
        search: 'Tìm kiếm',
        configuration: 'Cấu hình',
        language: 'Ngôn ngữ',
        theme: {
            name: 'Chủ đề',
            light: 'Sáng',
            dark: 'Tối',
        },
        dashboard: {
            monthly_revenue: 'Doanh thu hàng tháng',
            month_history: 'Lịch sử doanh thu 30 ngày',
            new_orders: 'Đơn hàng mới',
            pending_reviews: 'Đánh giá chờ xử lý',
            all_reviews: 'Xem tất cả đánh giá',
            new_customers: 'Khách hàng mới',
            all_customers: 'Xem tất cả khách hàng',
            pending_orders: 'Đơn hàng chờ xử lý',
            order: {
                items: 'bởi %{customer_name}, một món hàng |||| bởi %{customer_name}, %{nb_items} món hàng',
            },
            welcome: {
                title: 'Chào mừng bạn đến với demo react-admin e-commerce',
                subtitle:
                    'Đây là trang quản trị của một cửa hàng poster giả tưởng. Hãy tự do khám phá và chỉnh sửa dữ liệu - nó là dữ liệu cục bộ trên máy tính của bạn và sẽ được đặt lại mỗi lần bạn tải lại trang.',
                ra_button: 'Trang web react-admin',
                demo_button: 'Mã nguồn cho demo này',
            },
        },
        menu: {
            sales: 'Bán hàng',
            catalog: 'Danh mục',
            customers: 'Khách hàng',
        },
        events: {
            review: {
                title: 'Đã đăng đánh giá trên "%{product}"',
            },
            order: {
                title: 'Đặt 1 poster |||| Đặt %{smart_count} poster',
            },
        },
    },
    commons: {
        button: {
            create: "Tạo mới",
            cancel: "Huỷ",
            edit: "Chỉnh sửa",
            delete: "Xóa"
        },
        confirm: {
            message: "Hãy chọn một nội dung trước khi thực hiện chức năng"
        },
        dialog: {
            create: "Tạo mới %{type}",
            edit: "Chỉnh sửa nội dung %{type}",
            subTitleCreate: "Đây là phần nội dung sẽ tạo mới",
            subTitleEdit: "Đây là phần nội dung cần điều chỉnh"
        },          
        filter: {
            search: "Tìm kiếm",
        },
        list: {
            field: {
                background: "Màu nền",
                display: "Hiển thị",
                description: "Mô tả",
                foreground: "Màu chữ",
                value: "Giá trị"
            }
        },
        tabs: {
            default: "Mặc định",
            priority: "Ưu tiên"
        },
        notify: {
            notPermission:"Không thực hiện chức năng!",
        }      
    },
    resources: {
        default: {
            name: "Mặc định",
        },
        priority: {
            name: "Độ ưu tiên"
        },
        status: {
            name: "Trạng thái",
        },        
        customers: {
            name: 'Khách hàng |||| Khách hàng',
            fields: {
                orders: 'Đơn hàng',
                first_seen: 'Lần đầu tiên nhìn thấy',
                full_name: 'Tên đầy đủ',
                groups: 'Phân khúc',
                last_seen: 'Lần cuối nhìn thấy',
                last_seen_gte: 'Thăm từ',
                name: 'Tên',
                total_spent: 'Tổng chi tiêu',
                password: 'Mật khẩu',
                confirm_password: 'Xác nhận mật khẩu',
                stateAbbr: 'Tỉnh/Thành phố',
            },
            filters: {
                last_visited: 'Lần truy cập gần nhất',
                today: 'Hôm nay',
                this_week: 'Tuần này',
                last_week: 'Tuần trước',
                this_month: 'Tháng này',
                last_month: 'Tháng trước',
                earlier: 'Trước đây',
                has_ordered: 'Đã đặt hàng',
                has_newsletter: 'Đã đăng ký nhận bản tin',
                group: 'Phân khúc',
            },
            fieldGroups: {
                identity: 'Thông tin cá nhân',
                address: 'Địa chỉ',
                stats: 'Thống kê',
                history: 'Lịch sử',
                password: 'Mật khẩu',
                change_password: 'Đổi mật khẩu',
            },
            page: {
                delete: 'Xóa khách hàng',
            },
            errors: {
                password_mismatch: 'Mật khẩu xác nhận không khớp với mật khẩu.',
            },
            notifications: {
                created:
                    'Khách hàng đã được tạo |||| %{smart_count} khách hàng đã được tạo',
                updated:
                    'Khách hàng đã được cập nhật |||| %{smart_count} khách hàng đã được cập nhật',
                deleted:
                    'Khách hàng đã được xóa |||| %{smart_count} khách hàng đã bị xóa',
            },
        },
    },
};

export default customVietnameseMessages;
