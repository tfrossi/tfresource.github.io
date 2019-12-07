(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{192:function(e,i,t){"use strict";t.r(i);var n=t(0),o=Object(n.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Although the term user equilibrium (UE) is not mentioned in Wardrop’s paper^1^, in the context of transportation modeling, the term is used to describe a route choice assumption formally proposed by Wardrop: “The journey times on all the routes actually used are equal and less than those which would be experienced by a single vehicle on any unused routes”. This criterion is also known as Wardrop’s first principle.")]),e._v(" "),t("p",[e._v("This condition of UE can be described with an example case where an origin destination (OD) pair is connected by two one-way links representing two different routes. Illustrated in Figure 1, the assumed traffic demand between these OD is 3000 vehicle per hour (vph). Fixed characteristics of links utilized in the calculation are listed in Table 1. Travel times on these links are estimated by using a typical Bureau of Public Roads volume delay function shown in equation below where travel time is an increasing function of flow. This type of flow dependent functions for estimating travel time are also called link cost function.")]),e._v(" "),t("p",[e._v("'''Figure 1: Origin Destination Travel Options '''")]),e._v(" "),t("p",[e._v("!["),t("code",[e._v("Figure")]),e._v(" "),t("code",[e._v("1:")]),e._v(" "),t("code",[e._v("Origin")]),e._v(" "),t("code",[e._v("Destination")]),e._v(" "),t("code",[e._v("Travel")]),e._v(" "),t("code",[e._v("Options")]),e._v('](OD Travel Fig.jpg "fig:Figure 1: Origin Destination Travel Options")\\')]),e._v(" "),t("p",[e._v("'''Table 1: Link Characteristics '''\n![Table 1: Link Characteristics](Link Characterstics.jpg \"fig:Table 1: Link Characteristics\")"),t("br"),e._v('\n![](BPR Function.jpg "fig:BPR Function.jpg")'),t("br"),e._v("\nA graphical representation of user equilibrium condition is illustrated in Figure 2. Travel time on each link is represented in Y axis. Travel time on Link 1 is dependent on the link traffic volume shown on bottom X axis. Travel time on Link 2 is dependent on link traffic volume shown on top X axis. Note that the top X axis numbers are in reverse order so the sum of the two volumes will always equal 3,000. The point where these two travel time curves meet is the user equilibrium condition, where travel time on both links is equal (i.e. 1.333 minutes represented by green line). At this UE point, the traffic volume on link 1 is 2686 and traffic volume on link 2 is 314. Any other allocation of traffic between these two links results in unequal travel time and violates above mentioned Wardrop’s criteria. It is also important to note that, at this UE condition, the estimated traffic on link 1 is higher that assumed link capacity. This is one of the weaknesses frequently brought up in many transportation planning studies. Therefore, the estimated traffic volume and travel time are also interpreted as magnitude of total demand and the extent of congestion in model application scenarios. Assignment models that relates to link capacities are available but are not as widely used in practice.\\")]),e._v(" "),t("p",[e._v("'''Figure 2: An Example of User Equilibrium Condition '''\n![Figure 2: An Example of User Equilibrium Condition ](UE Condition.jpg \"fig:Figure 2: An Example of User Equilibrium Condition \")\\")]),e._v(" "),t("p",[e._v("The dotted lines in Figure 2 show an example of conditions when the UE criterion is not met. In this case, traffic volume on link 1 is 1500 and remaining 1500 traffic is on link 2. This allocation of traffic results in a better travel time for link 1 (dotted blue) and worse travel time for link 2 than the travel time at UE condition. The above example is an oversimplification of real world network assignment problems, where an origin-destination is connected by many more links. Therefore, in practice estimation of link traffic volume based UE model are resolved through iterative algorithms.")]),e._v(" "),t("p",[e._v("References")]),e._v(" "),t("ol",[t("li",[e._v("Wardrop, J.G. (1952) Some theoretical aspects of road traffic research, Proceedings of the Institution of Civil Engineers, Part II, volume 1, number 2, pages 325-378.")])])])}),[],!1,null,null,null);i.default=o.exports}}]);