export default function TermConditiont() {
	// Static data
	const termsAndConditions = [
		{
			title: "1. Delivery and Return",
			description:
				"The vehicle is delivered to the Renter in good overall condition and without apparent defects. Any complaints as to its condition must be made to the Lessor immediately upon delivery. The Renter agrees to return it with all documents and accessories and in the same condition to the Lessor at the location and on the date designated in this agreement. The Lessor reserves the right to repossess the vehicle without demand at Renter’s expense if vehicle is used in violation of this agreement.",
		},
		{
			title: "2. Damage, Loss, Theft etc.",
			description:
				"In the event of damages or loss of the vehicle or parts of it, including fire and breakage of glass, the Renter shall irrespective of his or the driver’s fault, pay the amount of all resulting loss and expenses to the Lessor (including but not limited to replacement or recovery costs, repair costs, compensation for decline in value and loss of the rental fee). If Standard Terms and Conditions of Rent are violated, any legal provisions (as well as customs regulations or insurance regulations) of loss of revenue the Lessor may charge a compensation corresponding to the rental charge, until the day the vehicle or a replacement vehicle will again be available to the Lessor. This liability of the Renter may be waived if renter accepts Loss Damage Waiver according to Clause 10 by placing his signature in the space 'Accept' on the front page, provided that the renter complies in all other respects with the terms and conditions of this Rental Agreement.",
		},
		{
			title: "3. Charges",
			description:
				"Renter shall pay any charges shown on the page or mentioned in the current tariffs. a) The Cash deposit will be returned after 21 working days. b) The Customer has to pay all the expenses (damage, traffic fines, fuel) if the sum of the charges is more than 30% of the deposit.",
		},
		{
			title: "4. Indemnity",
			description:
				"The Lessor is only responsible for loss or damage suffered by Renter or Third Parties, if such loss or damage was caused intentionally or through negligence on Lessor’s part. In all other cases, the Lessor cannot accept any liability and shall be immune against such claims.",
		},
		{
			title: "5. Conditions of use",
			description:
				"Rented vehicles are not to be driven while Renter or any other driver of vehicle is under the influence of alcohol, hallucinatory drugs, narcotics, barbiturates, or any other substance impairing consciousness or ability to react. Rented vehicles are not to be driven in contravention of any customs, traffic or other regulations.",
		},
	];

	return (
		<main className="bg-[#1E1F27]">
			<article className="w-[1248px] mx-auto text-white py-6 font-medium">
				<h1 className="mb-4 leading-none text-[29px] font-medium">TERMS AND CONDITIONS</h1>
				<section className="space-y-6">
					<span className="text-[17px] text-gray-200 tracking-tighter">
						The Lessor mentioned overleaf, called Auto Zoom Car Rental, hereby
						rents vehicle identified overleaf to Renter subject to all terms and
						conditions on the front page and this page and the Renter, on
						consideration thereof agrees to them as the essence of the
						agreement.
					</span>

					{termsAndConditions.map((term) => (
						<section key={term.title}>
							<p className="text-[22px] font-bold">{term.title}</p>
							<span className="text-gray-200 tracking-tighter text-[17px]">
								{term.description}
							</span>
						</section>
					))}
				</section>
			</article>
		</main>
	);
}
