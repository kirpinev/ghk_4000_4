import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import image from "./assets/image.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

export const App = () => {
  const [loading, setLoading] = useState(false);

  const clickProcessing = () => {
    setLoading(true);

    Promise.resolve().then(() => {
      window.gtag("event", "4000_processing_click_var4", {
        variant_name: "ghk_4000_4",
      });
      setLoading(false);
      LS.setItem(LSKeys.ShowProcessing, true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img
            src={image}
            alt="Карта для ребенка"
            style={{ width: "85%", borderRadius: "16px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0 }}
              >
                Кэшбэк до 30%
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Из 6 категорий на выбор
              </Typography.Text>
            </div>
            <div>
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0 }}
              >
                Бесплатно
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Обслуживание
              </Typography.Text>
            </div>
          </div>
        </div>

        <Gap size={48} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          className={appSt.productsTitle}
        >
          Как это работает
        </Typography.TitleResponsive>

        <Gap size={16} />

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <img
              src={icon1}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0 }}
              >
                Дебетовая карта
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Получайте суперкэшбэк рублями каждый месяц и бесплатно снимайте
                наличные в любых банкоматах
              </Typography.Text>
            </div>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon2}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0 }}
              >
                Категории с повышенным
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Продукты, маркетплейсы, такси и многое другое. А ещё можно
                выбрать кэшбэк на всё и получать выгоду всегда
              </Typography.Text>
            </div>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon3}
              alt=""
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0 }}
              >
                Крутите барабан суперкэшбэка
              </Typography.Text>
              <Typography.Text
                tag="p"
                view="primary-small"
                color="secondary"
                style={{ marginBottom: 0 }}
              >
                Дадим 40, 60, 80 и даже 100% кэшбэка на случайную категорию или
                увеличим процент на выбранную категорию
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile
          loading={loading}
          onClick={clickProcessing}
          block
          view="primary"
          href=""
        >
          Оформить за 299 ₽
        </ButtonMobile>
      </div>
    </>
  );
};
