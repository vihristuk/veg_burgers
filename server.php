<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $houseNumber = $_POST['houseNumber'];
    $caseNumber = $_POST['caseNumber'];
    $flatNumber = $_POST['flatNumber'];
    $floor = $_POST['floor'];

    $message = $_POST['message'];
    $pay = $_POST['payment'];

    $disturb = $_POST['do-not-call-back']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $houseNumber . '</li>
            <li>Корпус: ' . $caseNumber . '</li>
            <li>Квартира: ' . $flatNumber . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $message . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <vihristuk@gmail.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('vihristuk@bk.ru', 'Заказ', $mail_message, $headers);

    // if ($mail) {
    //   echo 'done';
    // }else{
    //   echo 'error';
    // }

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>