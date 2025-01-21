import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import moai from "../assets/moai.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { useEffect } from "react";
import { LS, LSKeys } from "../ls";

export const ThxLayout = () => {
  const clickSuccess = () => {
    if (!LS.getItem(LSKeys.ClickThanks, false)) {
      window.gtag("event", "4000_thnx_click", {
        variant_name: "ghk_4000_4",
      });

      LS.setItem(LSKeys.ClickThanks, true);
    }
  };

  useEffect(() => {
    if (!LS.getItem(LSKeys.ShowThanks, false)) {
      window.gtag("event", "4000_end_page_view", {
        variant_name: "ghk_4000_4",
      });

      LS.setItem(LSKeys.ShowThanks, true);
    }
  }, []);

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={moai}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Только тссс
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Вы поучаствовали в очень важном исследовании, которое поможет улучшить
          продукт. Вы – наш герой!
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile block view="primary" href="" onClick={clickSuccess}>
          Спасибо, понятно!
        </ButtonMobile>
      </div>
    </>
  );
};
