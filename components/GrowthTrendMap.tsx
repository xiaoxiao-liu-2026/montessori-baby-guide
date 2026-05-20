"use client";

import { useMemo, useState } from "react";
import { growthTrendStages, trendDimensions } from "@/lib/growthTrend";

const months = Array.from({ length: 37 }, (_, index) => index);

function findStage(month: number) {
  return (
    growthTrendStages.find((stage) => month >= stage.start && month <= stage.end) ??
    growthTrendStages[0]!
  );
}

function monthLabel(month: number) {
  return month === 0 ? "出生" : `${month}月`;
}

export function GrowthTrendMap() {
  const [selectedMonth, setSelectedMonth] = useState(20);
  const selectedStage = useMemo(() => findStage(selectedMonth), [selectedMonth]);

  return (
    <section className="bg-stone py-14 md:py-20">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium tracking-[0.08em] text-sageDark">
              成长地图
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[0] text-ink md:text-4xl">
              0-3 岁成长趋势图
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/72">
              从出生到 3 岁，宝宝会在不同阶段逐渐发展动作、语言、认知、秩序感和生活自理能力。点击月份或阶段，看看这个时候宝宝可能正在经历什么。
            </p>
          </div>
          <div className="rounded-lg border border-oatmeal bg-white p-4 text-sm leading-7 text-ink/72">
            这张成长趋势图帮助妈妈理解宝宝大概正在发展什么，不是用来比较和打分。每个孩子都有自己的节奏。
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-oatmeal bg-[#FBFAF7] shadow-sm">
          <div className="border-b border-oatmeal p-4 md:p-5">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {growthTrendStages.map((stage) => {
                const active =
                  selectedMonth >= stage.start && selectedMonth <= stage.end;

                return (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => setSelectedMonth(stage.start)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "border-sageDark bg-sageDark text-white"
                        : "border-oatmeal bg-white text-ink/72 hover:border-sage"
                    }`}
                  >
                    {stage.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {months.map((month) => {
                const active = month === selectedMonth;
                const stage = findStage(month);

                return (
                  <button
                    key={month}
                    type="button"
                    onClick={() => setSelectedMonth(month)}
                    onMouseEnter={() => setSelectedMonth(month)}
                    className={`flex min-h-14 min-w-14 shrink-0 flex-col items-center justify-center rounded-lg border text-xs transition ${
                      active
                        ? "border-sageDark bg-mist text-sageDark shadow-sm"
                        : "border-oatmeal bg-white text-ink/62 hover:border-sage"
                    }`}
                    aria-label={`查看${monthLabel(month)}发展趋势`}
                  >
                    <span className="font-semibold">{monthLabel(month)}</span>
                    <span className="mt-1 h-1.5 w-8 rounded-full bg-sage/45" />
                    <span className="sr-only">{stage.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[280px] bg-stone">
              <img
                src={selectedStage.image}
                alt={`${selectedStage.label}宝宝发展趋势代表场景`}
                className="h-full min-h-[280px] w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-md bg-cream/92 px-4 py-3 text-sm shadow-sm backdrop-blur">
                <p className="font-semibold text-sageDark">
                  {selectedStage.label}
                </p>
                <p className="mt-1 text-ink/70">
                  当前查看：{monthLabel(selectedMonth)}
                </p>
              </div>
            </div>

            <div className="p-5 md:p-7">
              <div className="flex flex-wrap gap-2">
                {trendDimensions.map((dimension) => {
                  const active = selectedStage.dimensions.includes(dimension);

                  return (
                    <span
                      key={dimension}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        active
                          ? "bg-mist text-sageDark"
                          : "bg-[#F1ECE4] text-ink/48"
                      }`}
                    >
                      {dimension}
                    </span>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-2">
                {trendDimensions.map((dimension) => {
                  const active = selectedStage.dimensions.includes(dimension);

                  return (
                    <div
                      key={dimension}
                      className="grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[8.5rem_1fr]"
                    >
                      <span className="text-xs text-ink/52">{dimension}</span>
                      <span className="h-1.5 overflow-hidden rounded-full bg-[#ECE5DA]">
                        <span
                          className={`block h-full rounded-full transition-all ${
                            active ? "w-full bg-sageDark" : "w-1/4 bg-oatmeal"
                          }`}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[0] text-ink">
                {monthLabel(selectedMonth)}可能正在发展的重点
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {selectedStage.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-oatmeal bg-white px-4 py-3 text-sm leading-6 text-ink/74"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-l-4 border-[#9A7A55] pl-4">
                <p className="text-sm font-semibold text-ink">妈妈可以怎么自然支持</p>
                <p className="mt-2 text-sm leading-7 text-ink/72">
                  {selectedStage.support}
                </p>
              </div>

              <div className="mt-5 rounded-lg bg-[#F7F2EA] p-4 text-sm leading-7 text-ink/72">
                <span className="font-semibold text-ink">妈妈别慌：</span>
                {selectedStage.calm}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
