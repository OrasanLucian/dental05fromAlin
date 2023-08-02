import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareMinus,
	faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';

export const ServiceCategory = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="flexcol">
			<div className="flex gap-2 p-2 items-center">
				<div>
					<FontAwesomeIcon
						className="text-lg"
						icon={isExpanded ? faSquareMinus : faSquarePlus}
						onClick={() => {
							setIsExpanded(!isExpanded);
						}}
					/>
				</div>
				<div className="rounded bg-slate-200 uppercase p-2">{props.title}</div>
			</div>
			{isExpanded ? (
				<div className="self-end w-36 flex justify-end">
					<table className="border text-[8px]">
						<thead>
							<th className="border">Serviciu</th>
							<th className="border">Pret</th>
						</thead>
						<tbody className="[&>*:nth-child(2n+1)]:bg-slate-100">
							{props.services.map((service, index) => (
								<tr key={index}>
									<td className="border">{service.name}</td>
									<td className="border">{service.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};
