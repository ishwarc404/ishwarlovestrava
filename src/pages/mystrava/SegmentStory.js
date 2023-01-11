import './SegmentStory.css';
import React, { useState, useEffect } from 'react';
import iphone from '../../assets/iphone.png';
import translate1 from '../../assets/translate1.jpg';
import translate2 from '../../assets/translate2.png';
import arrow_left from '../../assets/arrow_left.png';
import kilianjgroupride from '../../assets/kilianjgroupride.png';
import greenmountainGroupPicture from '../../assets/greenmountain_group.png'


var translate1Flag = true;

function SegmentStory() {
  const [, setState] = useState();

  useEffect(()=>{
  })

  return (
    <div className='SegmentStory'>
      <div className='d-flex justfity-content-center'>
        <div className='title-new-features-ss'>My segment stories: Green Mountain and the <a href='https://www.strava.com/activities/8080265404/overview' className='a_tag_ss' target='_blank'><span className='highlight_block_ss'>"Church of the Holy Trail"</span></a></div>
        <div className='d-flex feature-1'>
         <svg pointer-events="none" className="leaflet-zoom-animated" width="941" height="540" viewBox="-370 -78 941 540"><g><path class="leaflet-interactive" stroke="#FF0000" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M114 84L111 85L104 82L95 81L90 86L85 83L81 84L71 75L69 75L69 82L67 84L60 85L56 81L48 80L40 84L35 83L26 90L20 88L13 94L9 93L4 84L-2 85L-4 87L-4 92L-6 90L-10 92L-15 90L-21 90L-32 102L-40 101L-42 103L-42 109L-48 116L-50 123L-55 122L-64 131L-71 135L-75 135L-77 137L-82 135L-83 136L-85 143L-84 148L-80 153L-76 153L-71 158L-71 162L-65 172L-67 179L-64 184L-63 191L-59 194L-61 197L-59 199L-64 205L-64 211L-61 213L-62 216L-59 225L-60 228L-53 235L-49 244L-41 250L-36 265L-39 278L-38 283L-43 288L-42 289L-43 288L-44 294L-46 296L-46 301L-43 302L-45 307L-44 306L-43 314L-45 318L-45 324L-48 328L-49 337L-42 340L-40 352L-28 363L-29 377L-27 390L-24 396L-24 403L-26 410L-34 415L-33 425L-37 428L-37 430L-39 430L-39 462M-139 462L-140 457L-143 458L-144 461L-147 456L-153 438L-152 431L-159 418L-164 414L-165 410L-167 409L-168 400L-171 398L-173 393L-177 394L-176 386L-181 385L-180 380L-182 378L-186 380L-188 378L-189 369L-191 367L-189 360L-184 358L-181 354L-164 349L-162 342L-159 339L-157 329L-160 317L-159 309L-154 300L-154 292L-156 290L-154 282L-161 275L-158 260L-158 252L-161 238L-167 234L-173 233L-178 224L-176 218L-173 215L-175 212L-173 210L-179 211L-186 215L-189 213L-201 214L-205 210L-204 206L-208 181L-212 171L-217 165L-218 160L-213 132L-217 114L-217 108L-214 103L-198 88L-197 83L-199 84L-199 82L-195 75L-191 73L-187 73L-185 76L-186 84L-184 88L-184 96L-178 100L-172 115L-169 118L-167 118L-166 104L-164 101L-148 101L-135 99L-130 94L-125 84L-123 79L-124 75L-120 78L-118 84L-116 83L-117 81L-115 73L-112 68L-105 65L-97 59L-92 59L-89 63L-85 63L-80 67L-78 64L-69 68L-65 67L-65 63L-59 55L-57 57L-51 54L-47 54L-43 60L-37 62L-31 60L-26 61L-19 55L-11 54L-9 56L-8 55L2 58L10 58L15 55L19 44L24 41L33 50L37 50L48 55L53 59L57 59L67 65L69 69L72 71L73 70L78 74L86 74L91 76L94 75L98 78L101 78L109 77L109 74L110 76L112 74L112 68L115 63L127 51L129 51L129 49L132 52L131 51L129 55L124 56L126 54L130 51L117 65L115 74L120 77L128 73L133 75L140 85L147 87L153 93L154 98L156 98L157 104L166 101L172 104L175 110L183 104L185 104L190 106L194 111L195 118L191 140L194 148L193 152L195 157L195 178L192 183L192 186L189 189L189 198L186 206L187 208L185 210L186 215L183 223L181 225L179 224L179 226L176 228L170 229L165 233L163 231L159 233L155 232L156 233L154 236L155 234L152 233L152 231L148 232L144 228L145 229L143 231L140 223L136 218L133 221L131 218L129 221L119 220L116 221L114 223L115 224L114 223L111 227L104 227L106 231L102 233L102 235L101 234L100 236L91 240L91 243L89 241L88 246L87 245L84 247L87 250L84 253L84 251L80 256L83 259L85 259L82 261L83 264L80 265L78 271L75 274L76 279L73 280L71 287L70 286L67 289L68 291L70 291L65 290L66 291L65 290L66 291L63 292L63 296L59 300L63 300L53 302L47 305L45 310L45 317L32 317L26 321L24 326L22 326L18 332L14 330L15 331L13 333L10 332L7 336L-4 335L-7 337L-7 342L-10 342L-10 344L-14 344L-13 345L-15 348L-17 348L-17 352L-19 353L-20 356L-19 357L-21 361L-19 361L-22 366L-25 366L-29 370L-30 377L-27 388L-29 391L-28 397L-29 404L-34 411L-32 411L-35 414L-34 425L-36 425L-38 430L-40 430L-38 434L-38 442L-41 445L-42 449L-40 462M-141 462L-141 459L-143 459L-144 462M-146 462L-149 456L-152 444L-151 442L-154 439L-154 428L-157 423L-160 420L-162 420L-165 416L-169 400L-174 394L-177 395L-176 387L-180 386L-182 380L-186 381L-189 378L-189 370L-192 368L-187 358L-183 355L-178 352L-177 353L-166 349L-158 334L-162 321L-160 319L-158 308L-153 298L-156 292L-153 292L-155 286L-153 282L-161 274L-161 268L-158 259L-159 252L-161 249L-161 243L-166 237L-172 235L-175 232L-179 224L-187 215L-189 214L-200 216L-203 213L-204 204L-207 194L-209 192L-208 181L-218 162L-216 148L-218 145L-215 146L-214 138L-218 113L-216 107L-199 91L-197 86L-198 81L-193 76L-186 77L-187 86L-185 90L-185 97L-176 104L-173 108L-171 116L-168 118L-166 116L-167 105L-164 100L-135 100L-128 92L-126 84L-122 82L-123 75L-120 76L-120 81L-117 83L-117 79L-113 69L-97 60L-93 60L-90 62L-90 64L-85 64L-80 67L-77 64L-71 68L-65 68L-65 61L-63 59L-66 59L-54 53L-49 53L-42 61L-26 61L-22 57L-14 55L-1 56L-2 57L2 58L2 60L9 57L14 57L20 43L25 41L31 48L35 48L44 55L48 55L58 60L75 72L83 75L96 76L101 78L105 76L109 77L114 65L130 50L130 53L132 51L133 55L130 51L128 54L127 53L130 51L128 51L131 51L130 50L131 51L118 62L114 70L114 73L117 76L120 78L128 73L132 75L139 84L145 85L150 88L153 96L157 100L157 103L168 102L173 104L173 109L175 109L185 102L189 104L195 111L194 128L191 131L190 139L194 155L193 164L195 171L194 177L187 194L188 199L186 204L186 212L188 215L193 215L197 219L198 225L200 227L198 229L192 230L192 248L187 258L179 268L180 271L178 273L177 278L168 288L169 289L165 297L160 299L153 305L154 308L151 313L151 316L150 315L162 315L162 317L156 323L158 325L157 321L160 318L156 315L148 315L150 313L152 306L160 298L164 296L167 287L176 276L182 261L190 252L190 230L199 227L197 227L195 221L190 216L190 214L193 211L197 212L195 212L196 207L199 202L205 198L205 192L213 189L220 193L225 192L236 179L245 149L250 142L260 135L263 128L263 122L267 115L278 102L280 91L277 82L271 79L270 77L275 67L284 63L285 64L299 61L304 53L314 47L323 38L341 33L340 17L338 10L339 7L337 2L337 -4L339 -7L375 -7L389 -9L412 -9L425 -7L470 -9L571 -9"></path><path className="leaflet-interactive" stroke="#6D6D78" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M0 0"></path></g></svg>
        </div>
      </div>
      <div className='d-flex justfity-content-start'>
          <div className='intro-text-ss'>The segments and climbs in Boulder have given me an incredible confidence boost. I remember watching the Strava segment story video on Youtube about Hillary Allen and her journey back from injury. Green Mountain was a central part of this. The "Church" run have always been the longest and hardest. These generally dip their toes into the ultra distances, and during one of these runs, we planned on summitting Green Mountain 4 times, but I had to drop out after summitting it twice. I'll be back.
</div>
          <div className='intro-text-ss-2'>
            Green Mountain Summit Count: 
            <br/>
            5
          </div>
      </div>
    
    </div>

  );
}

export default SegmentStory;
