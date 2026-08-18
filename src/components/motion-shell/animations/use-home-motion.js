import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function useHomeMotion(contentRef, transitionReady, contentBlocked) {
  const heroTimelineRef = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = contentRef.current;
      if (!root || !transitionReady) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(root.querySelectorAll("[data-reveal]"), {
          clearProps: "all",
        });
        return;
      }

      const headingAnimations = new Map();
      const revealAnimations = new Map();
      const splits = [];
      const createObserver = (animations, rootMargin) =>
        new IntersectionObserver(
          contextSafe((entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;

              animations.get(entry.target)?.();
              animations.delete(entry.target);
              observer.unobserve(entry.target);
            }
          }),
          { rootMargin, threshold: 0.01 },
        );
      const headingObserver = createObserver(
        headingAnimations,
        "0px 0px -12% 0px",
      );
      const revealObserver = createObserver(
        revealAnimations,
        "0px 0px -10% 0px",
      );

      const hero = root.querySelector("[data-hero]");
      const heroRevealElements = hero
        ? gsap.utils.toArray(hero.querySelectorAll("[data-reveal]"))
        : [];
      const heroChrome = hero
        ? gsap.utils.toArray(hero.querySelectorAll("[data-hero-chrome]"))
        : [];
      const heroHeading = hero?.querySelector(
        "h1, h2, h3, [data-motion-heading]",
      );
      const heroSplit = heroHeading
        ? SplitText.create(heroHeading, {
            type: "words",
            mask: "words",
            wordsClass: "motion-word",
            aria: "auto",
          })
        : null;

      if (heroSplit) splits.push(heroSplit);

      const heroTimeline = gsap.timeline({ paused: true });
      heroTimelineRef.current = heroTimeline;

      if (hero) {
        heroTimeline
          .from(heroChrome, {
            y: 14,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.18,
            ease: "power3.out",
          })
          .from(
            heroRevealElements[0],
            { y: 20, autoAlpha: 0, duration: 0.55, ease: "power3.out" },
            0.08,
          )
          .from(
            heroSplit?.words ?? [],
            { yPercent: 140, duration: 1.05, ease: "power2.out" },
            0.15,
          )
          .from(
            heroRevealElements.slice(1),
            {
              y: 28,
              autoAlpha: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
            },
            0.38,
          );
      }

      const headings = gsap.utils
        .toArray(root.querySelectorAll("h1, h2, h3, [data-motion-heading]"))
        .filter((heading) => !heading.closest("[data-hero]"));

      for (const heading of headings) {
        const highlights = gsap.utils.toArray(
          heading.querySelectorAll("[data-highlight], .text-impact-gradient"),
        );
        const split = SplitText.create(heading, {
          type: "words",
          mask: "words",
          wordsClass: "motion-word",
          aria: "auto",
        });
        const contactTitleCtas = gsap.utils.toArray(
          heading.querySelectorAll("[data-contact-title-cta]"),
        );

        splits.push(split);
        gsap.set(split.words, { yPercent: 140 });
        if (highlights.length > 0) {
          gsap.set(highlights, { "--highlight-progress": "0%" });
        }
        if (contactTitleCtas.length > 0) {
          gsap.set(contactTitleCtas, {
            "--contact-reveal": "100%",
            "--contact-shadow-offset": "0em",
            "--contact-shadow-opacity": 0,
          });
        }

        headingAnimations.set(heading, () => {
          const timeline = gsap.timeline();

          timeline.to(split.words, {
            yPercent: 0,
            duration: 1.05,
            ease: "power2.out",
          });

          if (highlights.length > 0) {
            timeline.to(
              highlights,
              {
                "--highlight-progress": "100%",
                duration: 0.45,
                ease: "power3.out",
              },
              ">-=0.32",
            );
          }

          if (contactTitleCtas.length > 0) {
            timeline.to(
              contactTitleCtas,
              {
                "--contact-reveal": "0%",
                duration: 0.45,
                ease: "power3.inOut",
              },
              "<0.35",
            );
            timeline.set(contactTitleCtas, { clipPath: "none" });
            timeline.to(
              contactTitleCtas,
              {
                "--contact-shadow-offset": "0.09em",
                "--contact-shadow-opacity": 1,
                duration: 0.3,
                ease: "power3.out",
              },
              ">-=0.05",
            );
          }
        });
        headingObserver.observe(heading);
      }

      const teamBlindCards = gsap.utils.toArray(
        root.querySelectorAll("[data-team-blind-reveal]"),
      );

      for (const [cardIndex, card] of teamBlindCards.entries()) {
        const blinds = card.querySelector("[data-team-blinds]");
        const layers = gsap.utils.toArray(
          card.querySelectorAll("[data-team-blind-layer]"),
        );
        const topText = card.querySelector("[data-team-photo-top]");
        const bottomText = card.querySelector("[data-team-photo-bottom]");
        if (!blinds || layers.length === 0 || !topText || !bottomText) continue;

        gsap.set(blinds, { autoAlpha: 1 });
        gsap.set(topText, { y: -18, autoAlpha: 0 });
        gsap.set(bottomText, { y: 18, autoAlpha: 0 });
        revealAnimations.set(card, () => {
          const exitsUp = cardIndex % 2 === 0;
          const firstText = exitsUp ? bottomText : topText;
          const secondText = exitsUp ? topText : bottomText;

          gsap
            .timeline({
              onComplete: () => {
                gsap.set(blinds, { autoAlpha: 0 });
              },
            })
            .to(
              [...layers].reverse(),
              {
                yPercent: exitsUp ? -102 : 102,
                duration: 0.8,
                ease: "power2.inOut",
              },
              0,
            )
            .to(
              firstText,
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: "power3.out",
                clearProps: "transform,visibility,opacity",
              },
              0.18,
            )
            .to(
              secondText,
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: "power3.out",
                clearProps: "transform,visibility,opacity",
              },
              0.28,
            );
        });
        revealObserver.observe(card);
      }

      const reveals = gsap.utils
        .toArray(root.querySelectorAll("[data-reveal]"))
        .filter(
          (element) =>
            !element.closest("[data-hero]") &&
            !element.matches("h1, h2, h3, [data-motion-heading]") &&
            !element.querySelector("h1, h2, h3, [data-motion-heading]"),
        );

      for (const element of reveals) {
        gsap.set(element, { y: 36, autoAlpha: 0 });
        revealAnimations.set(element, () => {
          gsap.to(element, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,visibility,opacity",
          });
        });
        revealObserver.observe(element);
      }

      const parallaxMedia = gsap.matchMedia();

      const setupEngagementMotion = ({
        headerTravel,
        numberTravel,
        titleTravel,
        descriptionTravel,
      }) => {
        const engagement = root.querySelector("[data-engagement-section]");
        const engagementHeader = root.querySelector(
          "[data-parallax-engagement-header]",
        );

        if (engagement && engagementHeader) {
          gsap.fromTo(
            engagementHeader,
            { y: headerTravel },
            {
              y: -headerTravel,
              ease: "none",
              scrollTrigger: {
                trigger: engagement,
                start: "clamp(top bottom)",
                end: "clamp(top top)",
                scrub: 0.65,
              },
            },
          );
        }

        const engagementTimeline = root.querySelector(
          "[data-engagement-timeline]",
        );
        const engagementProgress = root.querySelector(
          "[data-engagement-progress]",
        );

        if (engagementTimeline && engagementProgress) {
          gsap.fromTo(
            engagementProgress,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: engagementTimeline,
                start: "clamp(top center)",
                end: "clamp(bottom center)",
                scrub: 0.45,
              },
            },
          );
        }

        const engagementRows = gsap.utils.toArray(
          root.querySelectorAll("[data-engagement-row]"),
        );

        for (const row of engagementRows) {
          const number = row.querySelector("[data-engagement-number]");
          const title = row.querySelector("[data-engagement-title]");
          const description = row.querySelector(
            "[data-engagement-description]",
          );
          const pulseRing = row.querySelector("[data-engagement-pulse]");
          const nodeDot = row.querySelector("[data-engagement-dot]");

          if (!number || !title || !description) continue;

          if (pulseRing && nodeDot) {
            const pulseNode = () => {
              gsap
                .timeline()
                .fromTo(
                  pulseRing,
                  { scale: 0.8, autoAlpha: 0.8 },
                  {
                    scale: 3.2,
                    autoAlpha: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    overwrite: true,
                  },
                )
                .fromTo(
                  nodeDot,
                  { scale: 1 },
                  {
                    scale: 1.8,
                    duration: 0.18,
                    repeat: 1,
                    yoyo: true,
                    ease: "power2.out",
                    overwrite: true,
                  },
                  0,
                );
            };

            ScrollTrigger.create({
              trigger: row,
              start: "clamp(center center)",
              end: "clamp(bottom center)",
              onEnter: pulseNode,
              onEnterBack: pulseNode,
            });
          }

          gsap
            .timeline({
              scrollTrigger: {
                trigger: row,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: 0.65,
              },
            })
            .fromTo(
              number,
              { y: numberTravel },
              { y: -numberTravel, ease: "none" },
              0,
            )
            .fromTo(
              title,
              { y: titleTravel },
              { y: -titleTravel, ease: "none" },
              0,
            )
            .fromTo(
              description,
              { y: -descriptionTravel },
              { y: descriptionTravel, ease: "none" },
              0,
            );
        }
      };

      parallaxMedia.add("(min-width: 768px)", () => {
        const heroContent = root.querySelector("[data-parallax-hero-content]");

        if (heroContent && hero) {
          gsap.to(heroContent, {
            y: -140,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.3,
            },
          });
        }

        const workContent = gsap.utils.toArray(
          root.querySelectorAll("[data-parallax-work-content]"),
        );

        for (const content of workContent) {
          const card = content.closest(".case-card");
          if (!card) continue;
          const getTravel = () =>
            gsap.utils.clamp(18, 36, card.offsetHeight * 0.06);

          gsap.fromTo(
            content,
            { y: () => getTravel() },
            {
              y: () => -getTravel(),
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            },
          );
        }

        setupEngagementMotion({
          headerTravel: 36,
          numberTravel: 28,
          titleTravel: 14,
          descriptionTravel: 10,
        });

        const teamInitials = gsap.utils.toArray(
          root.querySelectorAll("[data-parallax-team-initials]"),
        );

        for (const initials of teamInitials) {
          const card = initials.closest(".team-card");
          if (!card) continue;

          gsap.fromTo(
            initials,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: 0.45,
              },
            },
          );
        }

        const teamGeometry = gsap.utils.toArray(
          root.querySelectorAll("[data-parallax-team-geometry]"),
        );

        for (const geometry of teamGeometry) {
          const card = geometry.closest(".team-card");
          if (!card) continue;

          gsap.fromTo(
            geometry,
            { xPercent: -50, yPercent: -10 },
            {
              xPercent: -50,
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: 0.5,
              },
            },
          );
        }

        ScrollTrigger.refresh();
      });

      parallaxMedia.add("(max-width: 767px)", () => {
        setupEngagementMotion({
          headerTravel: 18,
          numberTravel: 14,
          titleTravel: 8,
          descriptionTravel: 6,
        });

        ScrollTrigger.refresh();
      });

      parallaxMedia.add("(min-width: 1024px)", () => {
        const contact = root.querySelector("[data-parallax-contact]");
        const aside = root.querySelector("[data-parallax-contact-aside]");

        if (!contact || !aside) return;

        gsap.fromTo(
          aside,
          { y: 70 },
          {
            y: -70,
            ease: "none",
            scrollTrigger: {
              trigger: contact,
              start: "clamp(top bottom)",
              end: "clamp(bottom top)",
              scrub: 0.45,
            },
          },
        );

        ScrollTrigger.refresh();
      });

      return () => {
        heroTimelineRef.current = null;
        parallaxMedia.revert();
        headingObserver.disconnect();
        revealObserver.disconnect();
        for (const split of splits) split.revert();
      };
    },
    {
      scope: contentRef,
      dependencies: [transitionReady],
      revertOnUpdate: true,
    },
  );

  useEffect(() => {
    if (transitionReady && !contentBlocked) {
      heroTimelineRef.current?.play(0);
    }
  }, [contentBlocked, transitionReady]);
}
